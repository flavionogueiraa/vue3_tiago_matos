<template>
  <div class="card">
    {{ product.name }} - {{ product.price }} <br />
    <button @click="addProductInCart">Adicionar no carrinho</button>
    <button @click="removeProductOfCart">Remover do carrinho</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addProductInCart() {
      this.$store.commit("addProductInCart", this.product);
    },
    removeProductOfCart() {
      this.$store.commit("removeProductOfCart", this.product.id);
    },
  },
};
</script>

<style scoped>
.card {
  background: bisque;
  padding: 10px;
  margin-bottom: 5px;
}
</style>
