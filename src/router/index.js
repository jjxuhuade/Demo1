import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Key'
import Demo5 from '@/components/Demo5'
import Demo6 from '@/components/Demo6'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/demo1', name: 'demo1', component: Demo1},
    {path: '/demo2', name: 'demo2', component: Demo2},
    {path: '/demo3', name: 'demo3', component: Demo3},
    {path: '/demo4', name: 'key', component: Demo4},
    {path: '/demo5', name: 'demo5', component: Demo5},
    {path: '/demo6', name: 'emit', component: Demo6}
  ]
})
