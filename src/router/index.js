import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: loadView('About')
  },
  {
    path: '/login',
    name: 'Login',
    component: loadView('Login')
  },
  {
    path: '/mission',
    name: 'Mission',
    component: loadView('Mission')
  },
  {
    path: '/tradeBuy',
    name: 'TradeBuy',
    component: loadView('TradeBuy')
  },
  {
    path: '/tradeSell',
    name: 'TradeSell',
    component: loadView('TradeSell')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
