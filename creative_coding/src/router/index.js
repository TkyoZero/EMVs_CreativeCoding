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
      component: () => import('../components/practice/DemoSketch.vue'),
    },
    {
      path: '/practice/random-ball',
      name: 'random-ball',
      component: () => import('../components/practice/RandomBallSketch.vue'),
    },
    {
      path: '/practice/loading',
      name: 'loading',
      component: () => import('../components/practice/LoadingSketch.vue'),
    },
    {
      path: '/practice/save-stlye',
      name: 'save-stlye',
      component: () => import('../components/practice/SaveStyleSketch.vue'),
    },
    {
      path: '/task/image-filter',
      name: 'image-filter',
      component: () => import('../components/task/imageManipulation1/ImageFilterSketch.vue'),
    }
  ],
})

export default router
