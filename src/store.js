import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myData: [],
    mySells: [],
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
    stockGames(state) {
      return state.myData.filter((a) => a.stock > 0);
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.myData = payload;
    },
    PUSH_SELL(state, payload) {
      setTimeout(() => {
        state.mySells.push(payload);
      }, 1000);
    },
    REST_SELL(state, payload) {
      setTimeout(() => {
        state.myData.map((a) => (a.nombre === payload ? a.stock-- : false));
      }, 2000);
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
