//Libraries
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		meta: {layout: "authorized"},
		component: () => import("../components/views/Home.vue")
	},
	{
		path: "/anime/:id/:title",
		name: "Anime",
		meta: {layout: "authorized"},
		component: () => import("../components/views/Anime.vue")
	},
	{
		path: "/manga/:id/:title",
		name: "Manga",
		meta: {layout: "authorized"},
		component: () => import("../components/views/Manga.vue")
	},
	{
		path: "/search",
		name: "Search",
		meta: {layout: "authorized"},
		component: () => import("../components/views/Search.vue")
	},
	{
		path: "/library",
		name: "Library",
		meta: {layout: "authorized"},
		component: () => import("../components/views/Library.vue")
	},
	{
		path: "/register",
		name: "SignUp",
		meta: {layout: "authentication"},
		component: () => import("../components/views/SignUp.vue")
	},
	{
		path: "/login",
		name: "SignIn",
		meta: {layout: "authentication"},
		component: () => import("../components/views/SignIn.vue")
	},
	{
		path: "/recovery",
		name: "Recovery",
		meta: {layout: "authentication"},
		component: () => import("../components/views/Recovery.vue")
	},
	{
		path: "/top-airing",
		name: "TopAiring",
		meta: {layout: "authorized"},
		component: () => import("../components/views/TopAiring.vue")
	},
	{
		path: "/top-anime",
		name: "TopAnime",
		meta: {layout: "authorized"},
		component: () => import("../components/views/TopAnime.vue")
	},
	{
		path: "/top-manga",
		name: "TopManga",
		meta: {layout: "authorized"},
		component: () => import("../components/views/TopManga.vue")
	},
	{
		path: "/top-characters",
		name: "TopCharacters",
		meta: {layout: "authorized"},
		component: () => import("../components/views/TopCharacters.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
