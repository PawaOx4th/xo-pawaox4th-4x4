import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    history: [],
  },
  mutations: {
    SET_HISTORY(state, payload) {
      state.history.push(payload);
    },
  },
  actions: {
    saveHisory({ commit }, data) {
      commit("SET_HISTORY", data);
    },
  },
  modules: {},
});
