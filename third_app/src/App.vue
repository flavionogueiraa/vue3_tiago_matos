<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ $store.state.user.first_name }}
    {{ $store.state.user.last_name }}
    {{ $store.state.user.email }}

    <button @click="updateUser">Save user</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
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

      this.$store.commit("storeUser", newUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
