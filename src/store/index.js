import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  items: [],
  manufacturerID: "",
  companyName: "",
  message: "",
  selctedItem: {},
  salesRep: {},
};

const actions = {
  getData({ commit }) {
    axios.get("data.json").then((response) => {
      commit("getData", response);
    });
  },
  selectItem({ commit }, item) {
    commit("updateSelected", item);
  },
};

const mutations = {
  getData(state, res) {
    state.items = res.data.items;
    state.manufacturerID = res.data.ManufacturerID;
    state.salesRep = res.data.SalesRep;
    state.companyName = res.data.CompanyName;
    state.message = res.data.Message;
  },
  updateSelected(state, payload) {
    state.selctedItem = payload;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
