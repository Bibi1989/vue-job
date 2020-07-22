import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location=";

export default new Vuex.Store({
  state: {
    jobs: [],
    query: {
      lang: "node",
      country: "usa",
    },
    loading: null,
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
    getTypes(state) {
      let types = state.jobs.map(({ title }) => title);
      return [...new Set(types)];
    },
    getQuery(state) {
      return state.query;
    },
    getCountry(state) {
      return state.query.country;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    fetchJobs(state, payload) {
      state.jobs = payload;
      state.loading = true;
    },
    filterJobs(state, payload) {
      state.query = payload;
    },
    loading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchJobs({ commit }, query) {
      commit("loading", true);
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${URL}description=${
              query.lang ? query.lang : "python"
            }&full_time=true&location=${query.country ? query.country : "usa"}`
          )
          .then((response) => {
            console.log(response.data);
            commit("fetchJobs", response.data);
            commit("filterJobs", query);
            commit("loading", null);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    filterJobs({ commit }, obj) {
      commit("filterJobs", obj);
    },
  },
  modules: {},
});
