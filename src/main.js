import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app')
