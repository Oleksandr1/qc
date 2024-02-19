import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      name: 'firstTask',
      component: () => import('../views/FirstTaskView.vue')
    },
    {
      path: '/second',
      name: 'secondTask',
      component: () => import('../views/SecondTaskView.vue')
    }
  ]
})

export default router
