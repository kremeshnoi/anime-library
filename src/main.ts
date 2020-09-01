//Libraries
import Vue from 'vue';
import App from './App.vue';
import VueMeta from 'vue-meta';
import Vuelidate from 'vuelidate';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.min.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'vue-recaptcha';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

//Libraries through configurations
import router from './router';
import store from './store';
import './registerServiceWorker';

//Styles
import './assets/styles/base/base.sass';
import './assets/styles/base/reset.sass';
import './assets/styles/theme/scrollbar.sass';
import './assets/styles/theme/fonts/material-icons.sass';
import './assets/styles/theme/fonts/days-one-regular.sass';

Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(Vuelidate);
Vue.use(VueAwesomeSwiper);

firebase.initializeApp({
	apiKey: 'AIzaSyCIPI4pf_bCw6vyUB7sg8ZWvU2MpCmR288',
	authDomain: 'otaku-library-b5dd4.firebaseapp.com',
	databaseURL: 'https://otaku-library-b5dd4.firebaseio.com',
	projectId: 'otaku-library-b5dd4',
	storageBucket: 'otaku-library-b5dd4.appspot.com',
	messagingSenderId: '75933468300',
	appId: '1:75933468300:web:ea747d3df0d9d601a19da9',
	measurementId: 'G-P47VCZ10ZJ'
});

let app;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app');
	}
});
