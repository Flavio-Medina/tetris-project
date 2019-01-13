import Vue from 'vue'
import Router from 'vue-router'
import startmenu from '@/components/startmenu'
import tetris from '@/components/tetris'
import tetrisinv from '@/components/tetrisinv'
import tetrisMP from '@/components/tetrisMP'
import tetristroll from '@/components/tetristroll'

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
  ]
})
