//Libraries
import Vue from "vue";
import App from "./App.vue";
import VueMeta from "vue-meta";
import Vuelidate from "vuelidate";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "vue-recaptcha";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

//Libraries through configurations
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

//Styles
import "./assets/styles/base/base.sass";
import "./assets/styles/base/reset.sass";
import "./assets/styles/theme/scrollbar.sass";
import "./assets/styles/theme/fonts/material-icons.sass";
import "./assets/styles/theme/fonts/days-one-regular.sass";

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(Vuelidate);
Vue.use(VueAwesomeSwiper);

firebase.initializeApp({
	apiKey: "AIzaSyD2Q4AAfZcG9elxTPTPmzADyY00YDiQpLw",
	authDomain: "anime-library-72ebd.firebaseapp.com",
	databaseURL: "https://anime-library-72ebd.firebaseio.com",
	projectId: "anime-library-72ebd",
	storageBucket: "anime-library-72ebd.appspot.com",
	messagingSenderId: "107283771690",
	appId: "1:107283771690:web:ccad8edf8dcdbc158dae53",
	measurementId: "G-02RXVDVNL3"
});

let app;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount("#app");
	}
});
