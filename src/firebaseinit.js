import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

const config = {
    apiKey: "AIzaSyDtel-a0xugeAgvJFrAJyzV1vICV00VyXs",
    authDomain: "pwa-vue3-sample-vuemastery.firebaseapp.com",
    projectId: "pwa-vue3-sample-vuemastery",
    storageBucket: "pwa-vue3-sample-vuemastery.appspot.com",
    messagingSenderId: "103656876522",
    appId: "1:103656876522:web:363c55143fb16646782a93"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

// export const messaging = firebase.messaging();
// Set VAPID KEY
export const messaging = firebase.messaging();
messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
});

export default firebase;
