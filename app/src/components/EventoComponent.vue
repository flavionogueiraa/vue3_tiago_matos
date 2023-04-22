<template>
  <div>
    <button @click="onClick">Enviar</button>

    <br />

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">Mouse over</div>

    <br /><br />

    <form action="https://google.com" @submit.prevent="onSubmit">
      <input @keyup.enter="onKeyUp" type="text">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    onClick($evt) {
      console.log("click", $evt);
    },
    onMouseOver($evt) {
      console.log("mouse over", $evt);
    },
    onMouseOut($evt) {
      console.log("mouse out", $evt);
    },
    onSubmit($evt) {
      console.log("submit", $evt);
    },
    onKeyUp($evt) {
      console.log("onKeyUp", $evt);
    }
  },
};
</script>

<style></style>
