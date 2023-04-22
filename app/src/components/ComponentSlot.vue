<template>
  <div>
    <div class="resumo">
      <h1>Component Slots</h1>

      <!-- <h2>Exemplo de subtítulo</h2>
      <ul>
        <li>Olha só</li>
        <li>Que exemplo</li>
        <li>Completo</li>
        <li>E incrível</li>
      </ul> -->
    </div>

    <div class="conteudo">
      <TheHeader>
        <template v-slot:title> Home </template>
        <template v-slot:description>
          <p>Incrível!!</p>
        </template>
        Content do header, uau!!
      </TheHeader>
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
    return {};
  },

  watch: {},

  computed: {},

  methods: {},
};
</script>

<style></style>
