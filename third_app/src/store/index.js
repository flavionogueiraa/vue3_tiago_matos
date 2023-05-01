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
  mutations: {
    storeUser(state, data) {
      console.log("storeUser", data, state);
      state.user = data;
    },
  },
  actions: {},
  getters: {},
});
