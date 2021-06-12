import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import { Model } from "vue-api-query";

import firebase from "firebase/app";
import "firebase/messaging";

// inject global axios instance as http client to REST API Model
Model.$http = axios;

async () => {
    const config = {
        apiKey: "AIzaSyB9fK1jMcJSGK0YBvOvzcGb4Zgk1uzFX-4",
        authDomain: "nodeeat.firebaseapp.com",
        projectId: "nodeeat",
        storageBucket: "nodeeat.appspot.com",
        messagingSenderId: "116083255744",
        appId: "1:116083255744:web:10f835ef90235c7bdb4025",
        measurementId: "G-EZM56QJ1LL",
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }else {
        firebase.app(); // if already initialized, use that one
      }
      //firebase.initializeApp(config);
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey(
        "BHYFK1M4CiPTi5WLOFcB7Oyv2sz6xjjXcFNo0Mh-nM0-Q1OC6j_eM7Cllm1xMR_bw55NMMisguihBeGLkrBCbTs"
      );
      try {
        await messaging.requestPermission();
        console.log('Notification permission granted.')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Unable to get permission to notify.", err);
      }

      let fcmToken;
      try {
        const currentToken = await messaging.getToken();
        fcmToken = currentToken;
        console.log("Token :", currentToken);
        
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Unable to retrieve token.", err);
      }
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
      });

      
}


createApp(App).use(store).use(router).mount("#app");
