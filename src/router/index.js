import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('../views/Start.vue') 
  },
  {
    path: '/playBoard',
    name: 'PlayBoard',
    component: () => import('../views/PlayBoard.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../pages/Result.vue'),
    children:[
      {
        path: 'circleWin',
        name: 'CircleWin',
        component: () => import('../pages/ResultPage/CircleWin.vue')
      },
      {
        path: 'crossWin',
        name: 'CrossWin',
        component: () => import('../pages/ResultPage/CrossWin.vue')
      },
      {
        path: 'draw',
        name: 'Draw',
        component: () => import('../pages/ResultPage/Draw.vue')
      },
    
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
