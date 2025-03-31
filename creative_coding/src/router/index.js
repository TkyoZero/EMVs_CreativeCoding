import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../components/DemoSketch.vue'),
    },
    {
      path: '/randomball',
      name: 'randomball',
      component: () => import('../components/RandomBallSketch.vue'),
    }
  ],
})

export default router
