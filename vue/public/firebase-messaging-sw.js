
/// [START initialize_firebase_in_sw]
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

firebase.initializeApp({
  'messagingSenderId': '116083255744',
});

const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

