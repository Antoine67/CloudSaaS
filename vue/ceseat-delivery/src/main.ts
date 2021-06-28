import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'


import '@/plugins/ceseat-lib'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false


Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')


