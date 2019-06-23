import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import TeaHome from 'containers/teaHome/teaHome.vue'

// application routes
const routes = [
  { path: '/', name: 'teaHome', component: TeaHome },
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active',
})
