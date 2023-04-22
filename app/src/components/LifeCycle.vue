<template>
  <div>
    <div class="resumo">
      <h1>Life Cycle (ciclo de vida)</h1>

      <h2>O life cycle de um componente vue é divido em 4 partes:</h2>
      <ul>
        <li>
          <h3>Criação</h3>
          <p>Preparar o seu componente.</p>
          <p>Ajax, inicializar variáveis e etc.</p>
          <p>Aqui você não possui acesso ao template (DOM).</p>
        </li>
        <li>
          <h3>Montagem</h3>
          <p>Inicializar uma lib externa. (new Lib())</p>
          <p>Geralmene essa lib irá precisar de acesso ao DOM.</p>
          <p>Tem acesso ao DOM.</p>
        </li>
        <li>
          <h3>Atualização</h3>
          <p>Mais voltado para debug.</p>
          <p>Update</p>
        </li>
        <li>
          <h3>Desmontagem</h3>
          <p>
            Remover tudo o que for necessário para liberar memória. (lib ->
            Desctroy, remove, clear)
          </p>
        </li>
        <li>
          <h3>Hooks</h3>
          <p>beforeCreate(), antes do componente ser criado.</p>
          <p>created(), depois do componente ser criado.</p>

          <p>beforeMount(), antes do componente ser montado.</p>
          <p>mounted(), depois do componente ser montado.</p>

          <p>beforeUnmount(), antes do componente ser desmontado.</p>
          <p>unmounted(), depois do componente ser desmonstado.</p>
        </li>
      </ul>
    </div>
    <div class="conteudo">
      <TheHeader v-if="showHeader"></TheHeader>
      <button @click="showHeader = !showHeader">Toggle header</button>
      <input v-model="name" type="text" />
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  name: "App",

  components: {
    TheHeader,
  },

  data() {
    return {
      name: "Flávio Silva",
      showHeader: true,
    };
  },

  // beforeCreate() {
  //   console.log("beforeCreate");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  // created() {
  //   console.log("created");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  // beforeMount() {
  //   console.log("beforeMount");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  // mounted() {
  //   console.log("mounted");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },

  // updated() {
  //   console.log("updated");
  // },

  // beforeUnmount() {
  //   console.log("beforeUnmount");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  // unmounted() {
  //   console.log("unmounted");
  //   console.log("Estado:", this.name);
  //   console.log("DOM:", this.$el);
  // },

  watch: {},

  computed: {},

  methods: {},
};
</script>

<style></style>
