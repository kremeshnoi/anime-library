// LIBRARIES

import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

// ROUTER CONFIG

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
		component: () => import('../components/views/anime/Anime.vue')
	},
	{
		path: '/characters/:id/:title',
		name: 'Character',
		meta: { layout: '' },
		component: () => import('../components/views/characters/Character.vue')
	},
	{
		path: '/anime/genres/:id/:title',
		name: 'anime-genre',
		meta: { layout: '' },
		component: () => import('../components/views/anime/AnimeGenre.vue')
	},
	{
		path: '/manga/genres/:id/:title',
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
		path: '/library',
		name: 'Library',
		meta: { layout: '', auth: true },
		component: () => import('../components/views/Library.vue')
	},
	{
		path: '/anime/top-airing',
		name: 'TopAiring',
		meta: { layout: '' },
		component: () => import('../components/views/anime/TopAiring.vue')
	},
	{
		path: '/anime/upcoming',
		name: 'AnimeUpcoming',
		meta: { layout: '' },
		component: () => import('../components/views/anime/AnimeUpcoming.vue')
	},
	{
		path: '/anime/top',
		name: 'TopAnime',
		meta: { layout: '' },
		component: () => import('../components/views/anime/TopAnime.vue')
	},
	{
		path: '/characters/popular',
		name: 'TopCharacters',
		meta: { layout: '' },
		component: () => import('../components/views/characters/PopularCharacters.vue')
	},
	{
		path: '/manga/top',
		name: 'TopManga',
		meta: { layout: '' },
		component: () => import('../components/views/manga/TopManga.vue')
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
