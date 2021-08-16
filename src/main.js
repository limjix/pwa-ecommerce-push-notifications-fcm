import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './firebaseinit'
import store from "./store";

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(store)
app.mount('#app')

store.dispatch('messagingInit')