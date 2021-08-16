importScripts("https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.9.1/firebase-messaging.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyDtel-a0xugeAgvJFrAJyzV1vICV00VyXs",
    authDomain: "pwa-vue3-sample-vuemastery.firebaseapp.com",
    projectId: "pwa-vue3-sample-vuemastery",
    storageBucket: "pwa-vue3-sample-vuemastery.appspot.com",
    messagingSenderId: "103656876522",
    appId: "1:103656876522:web:363c55143fb16646782a93"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Handling background message ", payload);

    // showNotification is where it comes out
    return self.registration.showNotification(payload.data.title, {
      body: payload.data.body,
      icon: payload.data.icon,
      tag: payload.data.tag,
      data: payload.data.link,
    });
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
});