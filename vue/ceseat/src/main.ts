import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false

/*
import firebase from "firebase/app";
import "firebase/messaging";

import '@/plugins/ceseat-lib'


import firebaseMessaging from './firebase'

Vue.prototype.$messaging = firebaseMessaging



const messaging = firebase.messaging();



firebase.app();

messaging.requestPermission()
.then((data)=> {
  console.log('Notification permission granted.')
}).catch((error)=> {
  console.log('Unable to get permission to notify. ' + error)
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


