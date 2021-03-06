import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/second',
      component: () => import('@/views/second')
    },
    {
      path: '/three',
      component: () => import('@/views/three')
    }
  ]
})
