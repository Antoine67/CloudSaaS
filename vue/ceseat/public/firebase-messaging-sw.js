importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyB9fK1jMcJSGK0YBvOvzcGb4Zgk1uzFX-4",
    authDomain: "nodeeat.firebaseapp.com",
    projectId: "nodeeat",
    storageBucket: "nodeeat.appspot.com",
    messagingSenderId: "116083255744",
    appId: "1:116083255744:web:10f835ef90235c7bdb4025",
    measurementId: "G-EZM56QJ1LL",
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
