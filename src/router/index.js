import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/Login.vue";
import HomeView from "@/views/admin/HomeView.vue";
import Main from "@/views/main/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'main',
        component: Main,
        meta: { requiresAuth: false },
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresAuth: false },
      },
      {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: {
          requiresAuth: true,
        },
      },
  ]
})

router.beforeEach((to, from, next) => {
  // load authentication token from local storage
  const isAuthenticated = localStorage.getItem('token')
  // if current route requires auth and is not authenticated
  if (to.meta.requiresAuth && !isAuthenticated)
  {
    // redirect to login
    next({ name: 'login' })
  }
  // else, if to path is login and is authenticated
  else if ((to.name === 'login' || to.name === 'main') && isAuthenticated)

  {
    // redirect to home
    next({ name: 'home' })
  }
  else
  {
    next()
  }
})

export default router
