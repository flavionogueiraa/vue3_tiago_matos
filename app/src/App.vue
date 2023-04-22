<template>
  <!-- <TheHeader v-if="showHeader" />

  <div v-show="showName">
    Nome: {{ firstName }} <br />
    Sobrenome: {{ lastName }}
  </div>
  
  <div v-if="accessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário  normal</div>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <TwoWayDataBinding></TwoWayDataBinding> -->
  <!-- <EventoComponent></EventoComponent> -->
  <ComputedProperty></ComputedProperty>
</template>

<script>
// import TheHeader from "./components/TheHeader.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import TwoWayDataBinding from "./components/TwoWayDataBinding.vue";
// import EventoComponent from './components/EventoComponent.vue';
import ComputedProperty from "./components/ComputedProperty.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // TheHeader,
    // TwoWayDataBinding,
    // EventoComponent,
    ComputedProperty,
  },
  data() {
    return {
      showHeader: true,
      firstName: "Jon",
      lastName: "Snow",
      showName: false,
      accessLevel: "marketing",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>
