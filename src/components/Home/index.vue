<template>
  <div class="parent">
    <h1>Github Jobs</h1>
    <Filters />
    <p v-if="country">
      Available jobs - {{ getJobs.length }} in
      {{ country }}
    </p>
    <div v-if="getLoading" class="loading">
      loading...
    </div>
    <div v-else v-for="job in getJobs" :key="job.id" class="container">
      <Job v-bind:job="job" />
    </div>
  </div>
</template>

<script>
  import Job from "./Job.vue";
  import Filters from "../FilterComponent/Filters.vue";

  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "Home",
    components: {
      Filters,
      Job,
    },
    data() {
      return {
        loading: null,
        query: {
          lang: "python",
          country: "usa",
        },
        store: this.getQuery,
      };
    },
    methods: {
      ...mapActions(["fetchJobs"]),
    },
    computed: {
      ...mapGetters(["getJobs", "getQuery", "getLoading"]),
      country() {
        return this.$store.getters.getCountry;
      },
    },
    created() {
      this.loading = true;
      console.log({ state: this.getLoading });
      this.fetchJobs(this.getQuery);
    },
  };
</script>

<style lang="scss" scoped>
  .parent {
    padding: 2% 10%;

    @media (max-width: 768px) {
      padding: 10px;
    }
    .loading {
      text-align: center;
      font-size: 1.5em;
      padding-top: 30px;
    }

    .container {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      padding: 1em;
      margin-bottom: 1em;
      border-radius: 0.3em;
    }
  }
</style>
