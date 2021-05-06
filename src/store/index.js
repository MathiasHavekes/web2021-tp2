import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: { type: "", message: "", isVisible: false },
  },
  mutations: {
    setAlert: (state, payload) => {
      state.alert = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentAlert: state => state.alert,
  },
})