import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Login from "@/views/auth/Login.vue";
import Profile from "@/views/logged/Profile.vue"
import MyOrders from "@/views/logged/MyOrders.vue"
import History from "@/views/logged/History.vue"
import NoRestaurantDashboard from "@/views/logged/NoRestaurantDashboard.vue"
import RestaurantManagement from "@/views/logged/RestaurantManagement.vue"
import CreateRestaurant from "@/views/logged/CreateRestaurant.vue"
import Dashboard from "@/views/logged/Dashboard.vue"

import auth from "@/middlewares/auth"
import hasRestaurant from "@/middlewares/hasRestaurant"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      middleware: auth 
    }
  },
  {
    path: '/my-orders',
    name: 'MyOrders',
    component: MyOrders,
    meta: {
      middleware: [auth, hasRestaurant]
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      middleware: [auth, hasRestaurant]
    }
  },
  {
    path: '/restaurant-management',
    name :'RestaurantManagement',
    component: RestaurantManagement,
    meta: {
      middleware: [auth, hasRestaurant]
    }
  },
  {
    path: '/no-restaurant-dashboard',
    name :'NoRestaurantDashboard',
    component: NoRestaurantDashboard,
    meta: {
      middleware: auth 
    }
  },
  {
    path: '/create-restaurant',
    name :'CreateRestaurant',
    component: CreateRestaurant,
    meta: {
      middleware: auth 
    }
  },
  {
    path: '/Dashboard',
    name :'Dashboard',
    component: Dashboard,
    meta: {
      middleware: [auth, hasRestaurant] 
    }
  },
  {
    path: '*',
    name: 'catchAll',
    component: Home
 }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes : routes
})


// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context: any, middleware: any, index: any) {
  const subsequentMiddleware = middleware[index];

  // If no subsequent Middleware exists,
  if (!subsequentMiddleware) return context.next;

  return (...parameters: any[]) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router
