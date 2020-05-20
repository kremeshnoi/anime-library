import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main-layout" },
    component: () => import("../views/Home.vue")
  },
  {
    path: "/search",
    name: "Search",
    meta: { layout: "main-layout" },
    component: () => import("../views/Search")
  },
  {
    path: "/library",
    name: "Library",
    meta: { layout: "main-layout" },
    component: () => import("../views/Library")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
