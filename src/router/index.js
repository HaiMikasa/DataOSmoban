import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index'
import noJurisdiction from '../views/home/lackOfCompetence' // 无权限页面

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/operationManager/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/noJurisdiction',
      name: 'noJurisdiction',
      component: noJurisdiction
    }
  ]
})
