import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/Index.vue'
import Safe from '../views/safe/Safe.vue'
import Service from '../views/service/Service.vue'
import Trend from '../views/trend/Trend.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/safe',
      name: 'safe',
      component: Safe
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    }
  ]
})

export default router;
