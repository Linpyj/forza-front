import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _015f0e95 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _4ef744e5 = () => interopDefault(import('../pages/mypage.vue' /* webpackChunkName: "pages/mypage" */))
const _5dd02268 = () => interopDefault(import('../pages/signin.vue' /* webpackChunkName: "pages/signin" */))
const _60208ad0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/admin",
      component: _015f0e95,
      name: "admin"
    }, {
      path: "/mypage",
      component: _4ef744e5,
      name: "mypage"
    }, {
      path: "/signin",
      component: _5dd02268,
      name: "signin"
    }, {
      path: "/",
      component: _60208ad0,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
