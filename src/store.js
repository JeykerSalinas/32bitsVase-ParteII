import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myData: [],
  },
  getters: {
    sumTitulos(state) {
      return state.myData.length;
    },
    sumEjemplares(state) {
      return state.myData.map((a) => a.stock).reduce((a, b) => a + b);
    },
    filterData(state) {
      return (n) => state.myData.filter((a) => a.codigo.includes(n));
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.myData = payload;
    },
  },
  actions: {
    async getData({ commit }) {
      try {
        const request = await axios("data.json");
        commit("SET_DATA", request.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
