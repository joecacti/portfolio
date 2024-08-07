import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70a963a4 = () => interopDefault(import('../pages/portfolio/godogsafe-site/index.vue' /* webpackChunkName: "pages/portfolio/godogsafe-site/index" */))
const _ba793d28 = () => interopDefault(import('../pages/portfolio/joeylangley-site/index.vue' /* webpackChunkName: "pages/portfolio/joeylangley-site/index" */))
const _228b7ff4 = () => interopDefault(import('../pages/portfolio/temperature-monitoring-app/index.vue' /* webpackChunkName: "pages/portfolio/temperature-monitoring-app/index" */))
const _55a7a9b3 = () => interopDefault(import('../pages/portfolio/ui-library/index.vue' /* webpackChunkName: "pages/portfolio/ui-library/index" */))
const _947377a0 = () => interopDefault(import('../pages/portfolio/workflow/index.vue' /* webpackChunkName: "pages/portfolio/workflow/index" */))
const _4fae1a4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/portfolio/godogsafe-site",
    component: _70a963a4,
    name: "portfolio-godogsafe-site"
  }, {
    path: "/portfolio/joeylangley-site",
    component: _ba793d28,
    name: "portfolio-joeylangley-site"
  }, {
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

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
