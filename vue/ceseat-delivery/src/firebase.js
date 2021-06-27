//firebase.js
import firebase from 'firebase/app';
import 'firebase/firebase-messaging';
const firebaseConfig = {
    apiKey: "AIzaSyB9fK1jMcJSGK0YBvOvzcGb4Zgk1uzFX-4",
    authDomain: "nodeeat.firebaseapp.com",
    projectId: "nodeeat",
    storageBucket: "nodeeat.appspot.com",
    messagingSenderId: "116083255744",
    appId: "1:116083255744:web:10f835ef90235c7bdb4025",
    measurementId: "G-EZM56QJ1LL",
};
firebase.initializeApp(firebaseConfig);
export default firebase.messaging();
//# sourceMappingURL=firebase.js.map