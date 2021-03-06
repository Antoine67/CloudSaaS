import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

import Notifications from 'vue-notification'

Vue.use(Notifications)

import '@/plugins/ceseat-lib'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')


