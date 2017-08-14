import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Demo1 from '@/components/Demo1'
import Demo2 from '@/components/Demo2'
import Demo3 from '@/components/Demo3'
import Demo4 from '@/components/Key'
import Demo5 from '@/components/Demo5'
import Demo6 from '@/components/Demo6'
import Demo7 from '@/components/Demo7'
import Demo8 from '@/components/Demo8'
import Demo9 from '@/components/Demo9'
import Demo10 from '@/components/Demo10'
import Demo11 from '@/components/Demo11'
import Demo12 from '@/components/Demo12'
import Demo13 from '@/components/Demo13'
import Demo14 from '@/components/Demo14'
import Demo15 from '@/components/Demo15'
import Demo16 from '@/components/Demo16'

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
    {path: '/demo6', name: 'emit', component: Demo6},
    {path: '/demo7', name: 'demo7', component: Demo7},
    {path: '/demo8', name: 'demo8', component: Demo8},
    {path: '/demo9', name: 'demo9', component: Demo9},
    {path: '/demo10', name: 'demo10', component: Demo10},
    {path: '/demo11', name: 'demo11', component: Demo11},
    {path: '/demo12', name: 'demo12', component: Demo12},
    {path: '/demo13', name: 'demo13', component: Demo13},
    {path: '/demo14', name: 'demo14', component: Demo14},
    {path: '/demo15', name: 'demo15', component: Demo15},
    {path: '/demo16', name: 'demo16', component: Demo16}
  ]
})
