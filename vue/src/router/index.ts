import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Products from "../views/Products.vue";
import RestaurantDetails from "../views/RestaurantDetails.vue"
import Login from "../views/auth/Login.vue";

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
  }
]

const router = new VueRouter({
  routes
})

export default router
