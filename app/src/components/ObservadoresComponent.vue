<template>
  <div>
    <h1>Observadores</h1>
    <div>
      <input v-model="name" type="text" /> <br />
      {{ name }}

      <br /><br />

      <input v-model="user.first_name" type="text" /> <br />

      <input v-model="user.last_name" type="text" /> <br />
      {{ user.first_name }}
      {{ user.last_name }}

      <br /><br />

      <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <br />
      {{ pageCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Flávio Silva",
      pageCount: 5,
      user: {
        first_name: "",
        last_name: "",
      },
    };
  },

  watch: {
    name(vl) {
      if (vl.length >= 3) {
        this.saveUserName();
      }
    },
    pageCount() {
      this.changePage();
    },
    user: {
      handler() {
        console.log("User alterado");
      },
      deep: true,
    },
  },

  computed: {},

  methods: {
    saveUserName() {
      console.log("Ajax");
      console.log(this.name);
    },
    changePage() {
      console.log("Ajax changePage");
    },
  },
};
</script>

<style></style>
