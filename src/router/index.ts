import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})
export default router
