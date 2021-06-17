import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Products from "@/views/public/Products.vue";
import RestaurantDetails from "@/views/public/RestaurantDetails.vue"
import Login from "@/views/auth/Login.vue";
import Profile from "@/views/logged/Profile.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  { 
    name: 'RestaurantDetails',
    path: '/restaurants/:id',
    component: RestaurantDetails,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
]

const router = new VueRouter({
  routes
})

export default router
