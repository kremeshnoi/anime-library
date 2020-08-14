//Libraries
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		meta: {layout: "authorized"},
		component: () => import("../views/Home.vue")
	},
	{
		path: "/anime/:id/:title",
		name: "Anime",
		meta: {layout: "authorized"},
		component: () => import("../views/Anime.vue")
	},
	{
		path: "/search",
		name: "Search",
		meta: {layout: "authorized"},
		component: () => import("../views/Search.vue")
	},
	{
		path: "/library",
		name: "Library",
		meta: {layout: "authorized"},
		component: () => import("../views/Library.vue")
	},
	{
		path: "/register",
		name: "SignUp",
		meta: {layout: "authentication"},
		component: () => import("../views/SignUp.vue")
	},
	{
		path: "/login",
		name: "SignIn",
		meta: {layout: "authentication"},
		component: () => import("../views/SignIn.vue")
	},
	{
		path: "/recovery",
		name: "Recovery",
		meta: {layout: "authentication"},
		component: () => import("../views/Recovery.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
