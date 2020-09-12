//Libraries
import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: '' },
		component: () => import('../components/views/Home.vue')
	},
	{
		path: '/anime/:id/:title',
		name: 'Anime',
		meta: { layout: '' },
		component: () => import('../components/views/Anime.vue')
	},
	{
		path: '/character/:id/:title',
		name: 'Character',
		meta: { layout: '' },
		component: () => import('../components/views/Character.vue')
	},
	{
		path: '/manga/:id/:title',
		name: 'Manga',
		meta: { layout: '' },
		component: () => import('../components/views/Manga.vue')
	},
	{
		path: '/search',
		name: 'Search',
		meta: { layout: '', auth: true },
		component: () => import('../components/views/Search.vue')
	},
	{
		path: '/library',
		name: 'Library',
		meta: { layout: '', auth: true },
		component: () => import('../components/views/Library.vue')
	},
	{
		path: '/register',
		name: 'SignUp',
		meta: { layout: '' },
		component: () => import('../components/views/SignUp.vue')
	},
	{
		path: '/login',
		name: 'SignIn',
		meta: { layout: '' },
		component: () => import('../components/views/SignIn.vue')
	},
	{
		path: '/recovery',
		name: 'Recovery',
		meta: { layout: '' },
		component: () => import('../components/views/Recovery.vue')
	},
	{
		path: '/top-airing',
		name: 'TopAiring',
		meta: { layout: '' },
		component: () => import('../components/views/TopAiring.vue')
	},
	{
		path: '/top-anime',
		name: 'TopAnime',
		meta: { layout: '' },
		component: () => import('../components/views/TopAnime.vue')
	},
	{
		path: '/popular-characters',
		name: 'TopCharacters',
		meta: { layout: '' },
		component: () => import('../components/views/PopularCharacters.vue')
	},
	{
		path: '/top-manga',
		name: 'TopManga',
		meta: { layout: '' },
		component: () => import('../components/views/TopManga.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
});

router.beforeEach((to,from, next) => {
	const currentUser = firebase.auth().currentUser;
	const requireAuth = to.matched.some(record => record.meta.auth);

	if(requireAuth && !currentUser) {
		next('/login')
	} else {
		next()
	}

	if(!currentUser) {
		to.meta.layout = 'unauthorized';
	} if(to.path === '/register' || to.path === '/login' || to.path === '/recovery') {
		to.meta.layout = 'authentication';
	} else if(currentUser){
		to.meta.layout = 'authorized';
	}

});

export default router;
