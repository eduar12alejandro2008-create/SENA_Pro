import { createApp } from 'vue'
import { Quasar } from 'quasar'

import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

import './style.css'
import App from './App.vue'
import router from './routes/routes.js'

const app = createApp(App)

app.use(Quasar, {})
app.use(router)

app.mount('#app')
