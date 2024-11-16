import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/TrainingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allures',
      component: HomeView
    },
    {
      path: '/calculs',
      name: 'calculs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Calculs.vue')
    }
  ]
})

export default router
