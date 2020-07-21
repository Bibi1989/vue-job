<template>
  <div class="parent">
    <h1>Github Jobs</h1>
    <div v-if="loading" class="loading">
      loading...
    </div>
    <div v-else v-for="job in getJobs" :key="job.id" class="container">
      <Job v-bind:job="job" />
    </div>
  </div>
</template>

<script>
  import Job from "./Job.vue";
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "Home",
    components: {
      Job,
    },
    data() {
      return {
        loading: null,
      };
    },
    methods: {
      ...mapActions(["fetchJobs"]),
    },
    computed: {
      ...mapGetters(["getJobs"]),
    },
    created() {
      this.loading = true;
      this.fetchJobs()
        .then(() => {
          this.loading = null;
        })
        .catch((e) => {
          this.loading = null;
          console.log(e);
        });
    },
  };
</script>

<style lang="scss" scoped>
  .parent {
    padding: 2% 10%;

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
