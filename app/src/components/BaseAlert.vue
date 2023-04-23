<template>
  <div :class="baseClass">
    {{ text }}

    <button @click="onClick">x</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

  watch: {},

  computed: {
    baseClass() {
      return ["alert", this.variant ? `alert-${this.variant}` : ""];
    },
  },

  methods: {
    onClick() {
      this.$emit("close");
      console.log("Clicou");
    },
  },

  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "Test",
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}
.alert-success {
  background: #42b983;
  color: white;
}

.alert-danger {
  background: red;
  color: white;
}

.alert-wanrning {
  background: yellow;
  color: black;
}
</style>
