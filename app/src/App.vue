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
  <!-- <ComputedProperty></ComputedProperty> -->
  <!-- <ObservadoresComponent></ObservadoresComponent> -->
  <!-- <LifeCycle></LifeCycle> -->
  <!-- <ComponentSlot></ComponentSlot> -->
  <div>
    <!-- <BaseCard></BaseCard>
    <div class="card">Example</div> -->
    <BaseAlert
      v-if="showAlert"
      variant="wanrning"
      text="Seu formulário foi enviado com sucesso!"
      @close="onClose()"
    ></BaseAlert>
  </div>
</template>

<script>
import BaseAlert from "./components/BaseAlert.vue";
// import TheHeader from "./components/TheHeader.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import TwoWayDataBinding from "./components/TwoWayDataBinding.vue";
// import EventoComponent from './components/EventoComponent.vue';
// import ComputedProperty from "./components/ComputedProperty.vue";
// import ObservadoresComponent from "./components/ObservadoresComponent.vue";
// import LifeCycle from "./components/LifeCycle.vue";
// import ComponentSlot from "./components/ComponentSlot.vue";
// import BaseCard from "./components/BaseCard.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // TheHeader,
    // TwoWayDataBinding,
    // EventoComponent,
    // ComputedProperty,
    // ObservadoresComponent,
    // LifeCycle,
    // ComponentSlot,
    // BaseCard,
    BaseAlert,
  },
  data() {
    return {
      showHeader: true,
      firstName: "Jon",
      lastName: "Snow",
      showName: false,
      accessLevel: "marketing",
      showAlert: true,
    };
  },
  methods: {
    onClose() {
      this.showAlert = false;
      console.log("onClose");
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
  margin: 60px;
}
</style>
