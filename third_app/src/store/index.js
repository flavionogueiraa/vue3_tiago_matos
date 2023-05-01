import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      first_name: "John",
      last_name: "Wick",
      email: "john.wick@gmail.com",
    },
    products: [],
    cart: [],
  },
  mutations: {},
  actions: {},
  getters: {},
});
