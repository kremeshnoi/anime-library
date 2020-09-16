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
		component: () => import('../components/views/main/Home.vue')
	},
	{
		path: '/anime/:id/:title',
		name: 'Anime',
		meta: { layout: '' },
		component: () => import('../components/views/anime/Anime.vue')
	},
	{
		path: '/character/:id/:title',
		name: 'Character',
		meta: { layout: '' },
		component: () => import('../components/views/characters/Character.vue')
	},
	{
		path: '/genre/anime/:id/:title',
		name: 'anime-genre',
		meta: { layout: '' },
		component: () => import('../components/views/anime/AnimeGenre.vue')
	},
	{
		path: '/genre/manga/:id/:title',
		name: 'manga-genre',
		meta: { layout: '' },
		component: () => import('../components/views/manga/MangaGenre.vue')
	},
	{
		path: '/manga/:id/:title',
		name: 'Manga',
		meta: { layout: '' },
		component: () => import('../components/views/manga/Manga.vue')
	},
	{
		path: '/search',
		name: 'Search',
		meta: { layout: '', auth: true },
		component: () => import('../components/views/main/Search.vue')
	},
	{
		path: '/library',
		name: 'Library',
		meta: { layout: '', auth: true },
		component: () => import('../components/views/main/Library.vue')
	},
	{
		path: '/sign-up',
		name: 'SignUp',
		meta: { layout: '' },
		component: () => import('../components/views/auth/SignUp.vue'),
		beforeEnter(to, from, next) {
			const currentUser = firebase.auth().currentUser;
			if(currentUser) {
				next('/');
			} else {
				next();
			}
		}
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		meta: { layout: '' },
		component: () => import('../components/views/auth/SignIn.vue'),
		beforeEnter(to, from, next) {
			const currentUser = firebase.auth().currentUser;
			if(currentUser) {
				next('/');
			} else {
				next();
			}
		}
	},
	{
		path: '/recovery',
		name: 'Recovery',
		meta: { layout: '' },
		component: () => import('../components/views/auth/Recovery.vue'),
		beforeEnter(to, from, next) {
			const currentUser = firebase.auth().currentUser;
			if(currentUser) {
				next('/');
			} else {
				next();
			}
		}
	},
	{
		path: '/top-airing',
		name: 'TopAiring',
		meta: { layout: '' },
		component: () => import('../components/views/anime/TopAiring.vue')
	},
	{
		path: '/popular-anime',
		name: 'AnimeUpcoming',
		meta: { layout: '' },
		component: () => import('../components/views/anime/AnimeUpcoming.vue')
	},
	{
		path: '/top-anime',
		name: 'TopAnime',
		meta: { layout: '' },
		component: () => import('../components/views/anime/TopAnime.vue')
	},
	{
		path: '/popular-characters',
		name: 'TopCharacters',
		meta: { layout: '' },
		component: () => import('../components/views/characters/PopularCharacters.vue')
	},
	{
		path: '/top-manga',
		name: 'TopManga',
		meta: { layout: '' },
		component: () => import('../components/views/manga/TopManga.vue')
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
		next('/sign-in');
	} else {
		next();
	}

	if(!currentUser) {
		to.meta.layout = 'unauthorized';
	} if(to.path === '/sign-up' || to.path === '/sign-in' || to.path === '/recovery') {
		to.meta.layout = 'authentication';
	} else if(currentUser){
		to.meta.layout = 'authorized';
	}

});

export default router;
