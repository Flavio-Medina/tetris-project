import Vue from 'vue'
import Router from 'vue-router'
import tmenu from '@/components/tmenu'
import gamemenu from '@/components/gamemenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tmenu',
      component: tmenu
    },
    {
      path: '/gamemenu',
      name: 'gamemenu',
      component: gamemenu
    }
  ]
})
