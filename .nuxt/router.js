import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _228b7ff4 = () => interopDefault(import('../pages/portfolio/temperature-monitoring-app/index.vue' /* webpackChunkName: "pages/portfolio/temperature-monitoring-app/index" */))
const _55a7a9b3 = () => interopDefault(import('../pages/portfolio/ui-library/index.vue' /* webpackChunkName: "pages/portfolio/ui-library/index" */))
const _947377a0 = () => interopDefault(import('../pages/portfolio/workflow/index.vue' /* webpackChunkName: "pages/portfolio/workflow/index" */))
const _4fae1a4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/portfolio/temperature-monitoring-app",
    component: _228b7ff4,
    name: "portfolio-temperature-monitoring-app"
  }, {
    path: "/portfolio/ui-library",
    component: _55a7a9b3,
    name: "portfolio-ui-library"
  }, {
    path: "/portfolio/workflow",
    component: _947377a0,
    name: "portfolio-workflow"
  }, {
    path: "/",
    component: _4fae1a4a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
