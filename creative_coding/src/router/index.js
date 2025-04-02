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
      path: '/practice/demo',
      name: 'demo',
      component: () => import('../components/Practice/DemoSketch.vue'),
    },
    {
      path: '/practice/randomball',
      name: 'randomball',
      component: () => import('../components/Practice/RandomBallSketch.vue'),
    },
    {
      path: '/practice/loading',
      name: 'loading',
      component: () => import('../components/Practice/LoadingSketch.vue'),
    },
    {
      path: '/practice/savestlye',
      name: 'savestlye',
      component: () => import('../components/Practice/SaveStyleSketch.vue'),
    }
  ],
})

export default router
