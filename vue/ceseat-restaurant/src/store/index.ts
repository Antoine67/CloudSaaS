import Vue from 'vue'
import Vuex from 'vuex'

import Auth from "./modules/auth.module";

import Cart from "./modules/cart.module"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Auth,
    Cart
  }
})
