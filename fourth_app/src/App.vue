<template>
  <div>
    <button @click="showAppHook = !showAppHook">Toggle AppHook</button> <br />
    <AppHook v-if="showAppHook"></AppHook> <br />

    <!-- {{ name }} <br /><br /> -->
    <!-- <h5>User</h5>
    {{ user.first_name }}
    {{ user.last_name }}

    <br />
    <h6>Full name</h6>
    {{ fullName }}

    <br />
    <button @click="user.first_name = 'Example name'">Atualizar nome</button>

    <br /> -->

    <!-- <h5>Admin</h5>
    {{ admin.first_name }}
    {{ admin.last_name }}
    <br />

    {{ count }}

    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <br /> -->

    <!-- <AppProduct></AppProduct> -->

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// import AppProduct from "./components/Products/AppProduct.vue";
import AppHook from "./components/AppHook.vue";

export default {
  name: "App",
  components: {
    // AppProduct,
    HelloWorld,
    AppHook,
  },
  setup() {
    const showAppHook = ref(true);

    const user = ref({
      first_name: "John",
      last_name: "Wick",
    });

    const fullName = computed(
      () => `${user.value.first_name} ${user.value.last_name}`
    );

    watch(
      user,
      () => {
        console.log("user changed");
        console.log("Lógica cabulosa");
      },
      { deep: true }
    );

    // const admin = ref({
    //   first_name: "Admin",
    //   last_name: "Master",
    // });

    // const count = ref(0);
    // console.log(count);

    // let name = "Flávio";
    // const changeName = () => {
    //   // alert("changeName");
    //   name = "John Wick";
    //   user.first_name = "Example";
    //   admin.value.first_name = "Other example";
    // };

    return {
      user,
      fullName,
      showAppHook,
      // admin,
      // name,
      // count,
      // changeName,
    };
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
