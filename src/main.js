// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import nprogress from 'nprogress'
import store from './vuex/store'

window.nprogress = nprogress
window.store = store

axios.defaults.baseURL = HOST
axios.defaults.timeout = 1000 * 15
axios.defaults.withCredentials = true
axios.defaults.headers.session_id = lockr.get('session_id') ? lockr.get('session_id') : ''
axios.defaults.headers['Content-Type'] = 'application/json'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach(route => {
  nprogress.done()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
