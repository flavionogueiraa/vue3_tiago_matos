<template>
  <div>
    <pre>
      {{ $store.state.cart }}
    </pre>
    <br />
    <AppProducts />

    <pre>
      {{ $store.state.user }}
    </pre>
    <button @click="updateUser">Save user</button>
  </div>
</template>

<script>
import AppProducts from "./components/Products/AppProducts.vue";

export default {
  name: "App",
  components: { AppProducts },
  data() {
    return {};
  },
  created() {},
  methods: {
    updateUser() {
      const newUser = {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@gmail.com",
      };

      // this.$store.commit("storeUser", newUser);
      this.$store.dispatch("storeUser", newUser).then(() => {
        console.log("User saved!");
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
