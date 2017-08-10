// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import nprogress from 'nprogress'

axios.defaults.baseURL = HOST
axios.defaults.timeout = 1000 * 15
axios.defaults.withCredentials = true
axios.defaults.headers.session_id = lockr.get('session_id') ? lockr.get('session_id') : ''
axios.defaults.headers['Content-Type'] = 'application/json'

window.nprogress = nprogress

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
  template: '<App/>',
  components: {App}
})
