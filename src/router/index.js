import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Demo1 = resolve => require(['../components/Demo1'], resolve)
const Demo2 = resolve => require(['../components/Demo2'], resolve)
const Demo3 = resolve => require(['../components/Demo3'], resolve)
const Demo4 = resolve => require(['../components/Key'], resolve)
const Demo5 = resolve => require(['../components/Demo5'], resolve)
const Demo6 = resolve => require(['../components/Demo6'], resolve)
const Demo7 = resolve => require(['../components/Demo7'], resolve)
const Demo8 = resolve => require(['../components/Demo8'], resolve)
const Demo9 = resolve => require(['../components/Demo9'], resolve)
const Demo10 = resolve => require(['../components/Demo10'], resolve)
const Demo11 = resolve => require(['../components/Demo11'], resolve)
const Demo12 = resolve => require(['../components/Demo12'], resolve)
const Demo13 = resolve => require(['../components/Demo13'], resolve)
const Demo14 = resolve => require(['../components/Demo14'], resolve)
const Demo15 = resolve => require(['../components/Demo15'], resolve)
const Demo16 = resolve => require(['../components/Demo16'], resolve)
const Demo17 = resolve => require(['../components/Demo17'], resolve)
const Demo18 = resolve => require(['../components/Demo18'], resolve)
const Demo19 = resolve => require(['../components/Demo19'], resolve)
const Demo20 = resolve => require(['../components/Demo20'], resolve)
const Demo20Child = resolve => require(['../components/Demo20Child'], resolve)
const Demo21 = resolve => require(['../components/Demo21'], resolve)
const block1 = resolve => require(['../components/block1'], resolve)
const block2 = resolve => require(['../components/block2'], resolve)
const block3 = resolve => require(['../components/block3'], resolve)
const emptyBlock = resolve => require(['../components/emptyBlock'], resolve)
const Demo22 = resolve => require(['../components/Demo22'], resolve)
const Demo23 = resolve => require(['../components/Demo23'], resolve)

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
    {path: '/demo16', name: 'demo16', component: Demo16},
    {path: '/demo17', name: 'demo17', component: Demo17},
    {path: '/demo18/:id', name: 'demo18', component: Demo18},
    {path: '/demo19/:id', name: 'demo19', component: Demo19},
    {path: '/demo20/:id', name: 'demo20', component: Demo20, children: [{path: 'child', component: Demo20Child}]},
    {
      path: '/demo21',
      name: 'demo21',
      component: Demo21,
      children: [{path: '', component: emptyBlock}, {path: 'child', components: {default: block1, block2, block3}}]
    },
    {path: '/demo22/:id', name: 'demo22', component: Demo22},
    {path: '/demo23/:id', name: 'demo23', component: Demo23}
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
