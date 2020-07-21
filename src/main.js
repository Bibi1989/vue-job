import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SuiVue from "semantic-ui-vue";
import VueSimpleMarkdown from "vue-simple-markdown";

import "semantic-ui-css/semantic.min.css";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(SuiVue);
Vue.use(VueSimpleMarkdown);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
