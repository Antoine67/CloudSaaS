import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Login from "@/views/auth/Login.vue";
import Profile from "@/views/logged/Profile.vue"
import Dashboard from "@/views/logged/Dashboard.vue"
import Deliveries from "@/views/logged/Deliveries.vue"

import auth from "@/middlewares/auth"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/deliveries',
    name :'Deliveries',
    component: Deliveries,
    meta: {
      middleware: auth 
    }
  },
  {
    path: '/Dashboard',
    name :'Dashboard',
    component: Dashboard,
    meta: {
      middleware: auth 
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
