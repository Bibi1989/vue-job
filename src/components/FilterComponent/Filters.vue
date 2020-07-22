<template>
  <div>
    <div>
      <sui-form>
        <sui-form-fields fields="three">
          <sui-form-field>
            <label>Description</label>
            <input placeholder="Description" type="text" v-model="query.lang" />
          </sui-form-field>
          <sui-form-field>
            <label>Location</label>
            <input placeholder="Location" type="text" v-model="query.country" />
          </sui-form-field>
          <!-- <sui-form-field>
            <label>Filter By Stack</label>
            <select class="select" @change="onChange" v-model="query">
              <option v-for="g in filters" :key="g" :value="g">{{ g }}</option>
            </select>
          </sui-form-field> -->
          <sui-form-field>
            <label for="" class="opacity">Button</label>
            <sui-button @click="searchJobs()" color="violet">Search</sui-button>
          </sui-form-field>
        </sui-form-fields>
      </sui-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "Filters",
    data() {
      return {
        filters: [
          "Full Stack Engineer (f/m/x)",
          "Backend Software Engineer",
          "Front End Developer",
          "Junior Data Engineer",
          "Software Enginee",
          "Senior Software Engineer",
          "Backend Engineer - Core Team Développeur PHP",
          "Softwareentwickler Optische Messtechnik (m/w/d)",
          "Developer - Investment Management",
          "Lead Software Developer/Architect aka Guru",
          "Senior Backend Engineer",
          "Softwareentwickler / Software Engineer ",
          "Sr. Backend Developer -- Fully Remote!",
          "Back End Engineer: Node.js | data | GraphQL",
          "Network DevOps Engineer",
          "Lead Software Developer",
          "Mid-Senior level Software Engineer",
          "Software Developer - Space Systems",
          "Satellite Ground Software Developer",
          "Flight Software Developer",
          "Senior Software Engineer (m/f)",
          "Senior Front End and Backend Developers",
          "Web Developer",
          "Cybersecurity Firm Seeks Senior Developer",
          "DevOps (Remote - Europe)",
          "Senior Quantitative Developer, Multi-Asset Class Strategies ",
          "Full Stack Developer & Senior Analyst (Investment Analytics)",
          "Software Engineer (m/f)",
          "Lead Engineer (m/f)",
          "Media Software Engineer",
          "Technical Lead, GitHub Solutions",
          "DevOps Engineer",
          "Software engineer (back end)",
          "Senior Python Developer",
          "Technology Solutions Developer",
          "Research Software Engineer",
          "Software Developer",
          "Frontend Engineer (m/f)",
          "Backend Engineer (f/m) Node.js",
          "Software Developer (Data Pipeline) ",
          "Full Stack Developer - Python",
          "Blockchain Engineer",
          "Backend Web Developer (Software Developer III Non-IT)",
          "Systems Engineer",
          "Game Engineer (HTML5)",
          "Lead Full Stack Developer",
          "Senior Technical Lead (VR) ",
          "Data Engineer (m/f) - Germany",
          "Senior Python Software Engineer ",
        ],
        query: {
          lang: "",
          country: "",
        },
      };
    },
    methods: {
      ...mapActions(["filterJobs", "fetchJobs"]),
      searchJobs() {
        this.fetchJobs(this.query);
        // console.log(this.query);
      },
    },
    computed: {
      ...mapGetters(["getTypes"]),
      getType() {
        return this.getTypes;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .opacity {
    opacity: 0;
  }
  .select {
    outline: none;
  }
</style>
