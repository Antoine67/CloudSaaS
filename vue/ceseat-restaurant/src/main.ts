import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

import '@/plugins/ceseat-lib'
import VueApexCharts from 'vue-apexcharts'

import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.use(VueSocketIOExt, io('http://ceseat-api.fr', {
  cors: ['*'],
}));


Vue.config.productionTip = false

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


new Vue({

  sockets: {
    connect() {
      console.log('Socket connected !')
    },
    notification(data: any) {
      
      let restId;
      try {
        restId = store.state.Auth.userData.restaurantId
      }catch(e) {
        return
      }


      if(data.type != 'RESTAURANT' || data.restaurantId != restId){
        return
      }


      let status = 'success'
      switch(data.status) {
         case 'SUCCESS' :
            status = 'success'
            break
        case 'INFO' :
            status = 'info'
            break
        case 'ERROR' :
            status = 'info'
            break
        default:
            status = 'info'
            break

      }

      Vue.notify({
        title: 'Nouvelle notification',
        text: data.text,
        duration: 7000,
        type: status
      })
    }
  },

  vuetify,
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')


