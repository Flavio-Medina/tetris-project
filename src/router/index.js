import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/menu'
import gamemenu from '@/components/gamemenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/gamemenu',
      name: 'gamemenu',
      component: gamemenu
    }
  ]
})
