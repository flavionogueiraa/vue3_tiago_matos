import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "John",
      last_name: "Wick",
      email: "john.wick@gmail.com",
    },
    products: [
      {
        id: 1,
        name: "Bola",
        price: 100,
      },
      {
        id: 2,
        name: "Chuteira",
        price: 200,
      },
      {
        id: 3,
        name: "Meião",
        price: 50,
      },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
    },
    addProductInCart(state, product) {
      state.cart.push(product);
    },
    removeProductOfCart(state, productId) {
      const index = state.cart.findIndex((product) => product.id === productId);
      state.cart.splice(index, 1);
    },
  },
  actions: {
    storeUser(context, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("storeUser", data);
          resolve();
          console.log("User stored");
        }, 3000);
      });
    },
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, product) => (total += product.price), 0);
    },
  },
});
