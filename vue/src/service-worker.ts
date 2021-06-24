import firebase from "firebase/app";
import 'firebase/messaging'
import {precacheAndRoute} from 'workbox-precaching';
import {clientsClaim, skipWaiting} from 'workbox-core';
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';


declare var self: ServiceWorkerGlobalScope

import { firebaseConfig } from './firebase'
import firebaseMessaging from './serviceWorker/firebaseMessaging'

//self.importScripts('https://www.gstatic.com/firebasejs/7.9.0/firebase-app.js')
//self.importScripts('https://www.gstatic.com/firebasejs/7.9.0/firebase-messaging.js')

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseMessaging(firebaseApp)