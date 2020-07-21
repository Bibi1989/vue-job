import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&location";

export default new Vuex.Store({
  state: {
    jobs: [],
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
  },
  mutations: {
    fetchJobs(state, payload) {
      state.jobs = payload;
    },
  },
  actions: {
    fetchJobs({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(URL)
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
  },
  modules: {},
});
