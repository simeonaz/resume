import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FrVersion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fr',
      name: 'fr',
      component: HomeView,
    },
    {
      path: '/',
      name: 'en',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnVersion.vue'),
    },
  ],
})

export default router
