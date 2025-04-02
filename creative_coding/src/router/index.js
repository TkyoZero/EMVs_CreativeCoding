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
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../components/LoadingSketch.vue'),
    },
    // {
    //   path: 'savestlye',
    //   name: 'savestlye',
    //   component: () => import('../components/SaveStyleSketch.vue'),
    // }
  ],
})

export default router
