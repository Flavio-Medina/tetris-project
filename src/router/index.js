import Vue from 'vue'
import Router from 'vue-router'
import startmenu from '@/components/startmenu'
import tetris from '@/components/tetris'
import tetrisinv from '@/components/tetrisinv'
import tetrisMP from '@/components/tetrisMP'
import tetristroll from '@/components/tetristroll'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startmenu',
      component: startmenu
    },
    {
      path: '/tetris',
      name: 'tetris',
      component: tetris
    },
    {
      path: '/tetrisinv',
      name: 'tetrisinv',
      component: tetrisinv
    },
    {
      path: '/tetrisMP',
      name: 'tetrisMP',
      component: tetrisMP
    },
    {
      path: '/tetristroll',
      name: 'tetristroll',
      component: tetristroll
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
