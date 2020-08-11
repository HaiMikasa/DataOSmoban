import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index'
import trainingCourse from './trainingCourse/index'

Vue.use(Router)

export default new Router({
  base: '/eduPlatform/',
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
    ...trainingCourse
  ]
})
