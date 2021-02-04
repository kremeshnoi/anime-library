import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cd44ed4a = () => interopDefault(import('../pages/recovery/index.vue' /* webpackChunkName: "pages/recovery/index" */))
const _1c98a9c5 = () => interopDefault(import('../pages/sign-in/index.vue' /* webpackChunkName: "pages/sign-in/index" */))
const _ba94608a = () => interopDefault(import('../pages/sign-up/index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _b0b1c1ce = () => interopDefault(import('../pages/anime/airing/index.vue' /* webpackChunkName: "pages/anime/airing/index" */))
const _3539b04a = () => interopDefault(import('../pages/anime/top/index.vue' /* webpackChunkName: "pages/anime/top/index" */))
const _2e1d8f5d = () => interopDefault(import('../pages/anime/upcoming/index.vue' /* webpackChunkName: "pages/anime/upcoming/index" */))
const _f2e8150c = () => interopDefault(import('../pages/characters/popular/index.vue' /* webpackChunkName: "pages/characters/popular/index" */))
const _7f7378ec = () => interopDefault(import('../pages/manga/top/index.vue' /* webpackChunkName: "pages/manga/top/index" */))
const _ceea3a3c = () => interopDefault(import('../pages/anime/genres/_id/_title/index.vue' /* webpackChunkName: "pages/anime/genres/_id/_title/index" */))
const _5374c622 = () => interopDefault(import('../pages/manga/genres/_id/_title/index.vue' /* webpackChunkName: "pages/manga/genres/_id/_title/index" */))
const _d5e024e2 = () => interopDefault(import('../pages/anime/_id/_title/index.vue' /* webpackChunkName: "pages/anime/_id/_title/index" */))
const _05473863 = () => interopDefault(import('../pages/characters/_id/_title/index.vue' /* webpackChunkName: "pages/characters/_id/_title/index" */))
const _a064f3d2 = () => interopDefault(import('../pages/library/_type/_status/index.vue' /* webpackChunkName: "pages/library/_type/_status/index" */))
const _0993324f = () => interopDefault(import('../pages/manga/_id/_title/index.vue' /* webpackChunkName: "pages/manga/_id/_title/index" */))
const _b548f5c2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/recovery",
    component: _cd44ed4a,
    name: "recovery"
  }, {
    path: "/sign-in",
    component: _1c98a9c5,
    name: "sign-in"
  }, {
    path: "/sign-up",
    component: _ba94608a,
    name: "sign-up"
  }, {
    path: "/anime/airing",
    component: _b0b1c1ce,
    name: "anime-airing"
  }, {
    path: "/anime/top",
    component: _3539b04a,
    name: "anime-top"
  }, {
    path: "/anime/upcoming",
    component: _2e1d8f5d,
    name: "anime-upcoming"
  }, {
    path: "/characters/popular",
    component: _f2e8150c,
    name: "characters-popular"
  }, {
    path: "/manga/top",
    component: _7f7378ec,
    name: "manga-top"
  }, {
    path: "/anime/genres/:id?/:title",
    component: _ceea3a3c,
    name: "anime-genres-id-title"
  }, {
    path: "/manga/genres/:id?/:title",
    component: _5374c622,
    name: "manga-genres-id-title"
  }, {
    path: "/anime/:id?/:title",
    component: _d5e024e2,
    name: "anime-id-title"
  }, {
    path: "/characters/:id?/:title",
    component: _05473863,
    name: "characters-id-title"
  }, {
    path: "/library/:type?/:status",
    component: _a064f3d2,
    name: "library-type-status"
  }, {
    path: "/manga/:id?/:title",
    component: _0993324f,
    name: "manga-id-title"
  }, {
    path: "/",
    component: _b548f5c2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
