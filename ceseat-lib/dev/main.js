import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/ceseat-lib'
import router from './plugins/router'


import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false


import VueRouter from 'vue-router'

Vue.use(VueRouter);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')