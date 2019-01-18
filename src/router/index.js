import Vue from 'vue'
import Router from 'vue-router'
import startmenu from '@/components/startmenu'
import tetris from '@/components/tetris'
import tetrisHighestLevel from '@/components/tetrisHighestLevel'
import tetrisDifficultyMedium from '@/components/tetrisDifficultyMedium'
import tetrisinv from '@/components/tetrisinv'
import tetrisMP from '@/components/tetrisMP'
import tetristroll from '@/components/tetristroll'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/user/register',
      name: 'register',
      component: register
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/tetrisHighestLevel',
      name: 'tetrisHighestLevel',
      component: tetrisHighestLevel
    },
    {
      path: '/tetrisDifficultyMedium',
      name: 'tetrisDifficultyMedium',
      component: tetrisDifficultyMedium
    }
  ]
})
