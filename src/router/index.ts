import HomeView from '@/views/HomeView.vue'
import ViewOne from '@/views/ViewOne.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vistaone',
      name: 'vistaone',
      component: ViewOne
    },
  ]
})

export default router
