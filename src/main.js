//Libraries
import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta"
import VueAwesomeSwiper from "vue-awesome-swiper";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

//Libraries + Configurations
import router from "./router/index.js";
import store from "./store/index.js";
import "./registerServiceWorker.js";

//Styles
import "./assets/styles/utils/index.sass"
import "./assets/styles/theme/index.sass"

Vue.config.productionTip = false;
Vue.use(VueMeta, VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
