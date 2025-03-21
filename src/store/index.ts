import { createStore } from "vuex";

const defaultState = {
  count: 0,
};

const store = createStore({
  state() {
    return {
      count: 10,
    };
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    },
  },
  actions: {
    // increment({ commit }) {
    //   commit('increment');
    // }
  }
});

export default store;

