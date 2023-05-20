<template>
  <div>
    {{ name }} <br /><br />
    <h5>User</h5>
    {{ user.first_name }}
    {{ user.last_name }}
    <br />
    <h5>Admin</h5>
    {{ admin.first_name }}
    {{ admin.last_name }}
    <br />

    {{ count }}

    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <br />

    <!-- <AppProduct></AppProduct> -->

    <img @click="changeName()" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// import AppProduct from "./components/Products/AppProduct.vue";

export default {
  name: "App",
  components: {
    // AppProduct,
    HelloWorld,
  },
  setup() {
    const user = reactive({
      first_name: "John",
      last_name: "Wick",
    });

    const admin = ref({
      first_name: "Admin",
      last_name: "Master",
    });

    const count = ref(0);
    console.log(count);

    let name = "Flávio";
    const changeName = () => {
      // alert("changeName");
      name = "John Wick";
      user.first_name = "Example";
      admin.value.first_name = "Other example";
    };

    return {
      admin,
      user,
      name,
      count,
      changeName,
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
