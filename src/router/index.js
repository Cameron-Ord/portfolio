import { createRouter, createWebHistory } from 'vue-router'
import PageMain from '../views/PageMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: PageMain
    },
  ]
})

export default router
