import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  items: [],
  manufacturerID: "",
};

const actions = {
  getData({ commit }) {
    axios.get("data.json").then((response) => {
      commit("getData", response);
    });
  },
};

const mutations = {
  getData(state, res) {
    // console.log(res);
    state.items = res.data.items;
    state.manufacturerID = res.data.ManufacturerID;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
