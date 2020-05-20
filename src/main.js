import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMeta from 'vue-meta'
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
