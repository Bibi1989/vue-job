<template>
  <div class="card">
    <div class="flex">
      <p>
        {{ job.title }} - <span class="company">{{ job.company }}</span>
      </p>

      <img
        v-if="job.company_logo"
        :src="job.company_logo"
        alt="company logo"
        width="50"
      />
    </div>
    <p class="date">{{ new Date(job.created_at).toDateString() }}</p>
    <sui-label key="small" color="violet">{{ job.type }}</sui-label>
    <sui-label key="tiny" color="purple">{{ job.location }}</sui-label>
    <p class="short_description">
      {{ job.company_url }}
    </p>
    <div>
      <sui-accordion exclusive>
        <sui-accordion-title>
          <sui-icon name="dropdown" />
          Click to see description
        </sui-accordion-title>
        <sui-accordion-content>
          <p v-html="job.description"></p>
          <div v-html="job.how_to_apply"></div>
        </sui-accordion-content>
      </sui-accordion>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Job",
    props: {
      job: Object,
    },
    computed: {
      description() {
        let texts = this.job.description.replace(/(<([^>]+)>)/gi, "");
        return texts;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .card {
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5em;
    }
    .type,
    .location {
      display: inline-block;
      padding: 0.2em 0.6em;
      background: violet;
      color: white;
      margin-right: 0.8em;
      border-radius: 0.3em;
    }
    .company {
      color: #999999;
    }
    .date {
      color: #aaaaaa;
      margin-bottom: 0.5em;
    }
    .short_description {
      color: #999999;
      width: 80%;
      margin-top: 0.3em;
    }
    .description {
      color: #777777;
      padding: 0.5em 1em;
      width: 80%;
    }
    p {
      margin: 0;
      margin-bottom: 0.5em;
    }
  }
</style>
