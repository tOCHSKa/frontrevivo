import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../store/userStore'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   const store = useUserStore()

//   if (to.meta.requiresAuth && !store.isLoggedIn) {
//     return next('/login')
//   }

//   next()
// })

export default router
