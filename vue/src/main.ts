import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import vuetify from '@/plugins/vuetify'


import axios from "axios";

import firebase from "firebase/app";
import "firebase/messaging";

import VueCookie from 'vue-cookie'

VueCookie.get('username')

Vue.use(VueCookie)
Vue.use(VueCompositionApi)

import firebaseMessaging from './firebase'

Vue.prototype.$messaging = firebaseMessaging

Vue.config.productionTip = false

const messaging = firebase.messaging();



firebase.app();

messaging.requestPermission()
  .then(() => {
    return messaging.getToken()
  })
  .then((token) => {
  })
  .catch((err) => {
  })

  messaging.onMessage(function(payload) {
  alert("Foreground message fired!")
  console.log(payload)
});

messaging.usePublicVapidKey(
  "BHYFK1M4CiPTi5WLOFcB7Oyv2sz6xjjXcFNo0Mh-nM0-Q1OC6j_eM7Cllm1xMR_bw55NMMisguihBeGLkrBCbTs"
);


let fcmToken;

messaging.getToken().then((currentToken)=> {
  fcmToken = currentToken;
  console.log("Token :", currentToken);
}).catch((error)=> {
  console.error("Unable to retrieve token.", error);
});

//TODO Store and use fcmToken

/*
messaging.onTokenRefresh(async () => {
  try {
    const refreshedToken = await messaging.getToken();
    // eslint-disable-next-line no-console
    console.log("Token refreshed.");
    fcmToken = refreshedToken;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Unable to retrieve refreshed token.", err);
  }
});


messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});*/


    

new Vue({
  vuetify,
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')


