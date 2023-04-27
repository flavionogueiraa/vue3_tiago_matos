<template>
  <div>
    <pre>
        {{ $route.query.page }}
    </pre>
    Usuário

    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$router);
  },
  methods: {
    login() {
      console.log("Chegou");
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style></style>
