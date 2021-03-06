import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/operationManager/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
