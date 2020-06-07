import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta"
import "materialize-css/dist/js/materialize.min";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css"

Vue.config.productionTip = false;
Vue.use(VueMeta, VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
