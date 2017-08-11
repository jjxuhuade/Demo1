import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/demo1', name: 'demo1', component: Demo1},
    {path: '/demo2', name: 'demo2', component: Demo2}
  ]
})
