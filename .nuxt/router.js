import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _707160af = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _7ba193ea = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _444fdff2 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _3f020cb2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/admin",
      component: _707160af,
      name: "admin"
    }, {
      path: "/mypage",
      component: _7ba193ea,
      name: "mypage"
    }, {
      path: "/signin",
      component: _444fdff2,
      name: "signin"
    }, {
      path: "/",
      component: _3f020cb2,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
