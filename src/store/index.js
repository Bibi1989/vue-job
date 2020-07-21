import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location=";

export default new Vuex.Store({
  state: {
    jobs: [],
    query: {},
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
      console.log(state.query);
      return state.query;
    },
  },
  mutations: {
    fetchJobs(state, payload) {
      state.jobs = payload;
    },
    filterJobs(state, payload) {
      state.query = payload;
    },
  },
  actions: {
    fetchJobs({ commit }, query) {
      console.log(query);
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
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    filterJobs({ commit }, obj) {
      console.log({ obj });
      commit("filterJobs", obj);
    },
  },
  modules: {},
});
