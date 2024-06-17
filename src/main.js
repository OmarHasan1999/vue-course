import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './css/profilePage.css'

import mitt from "mitt"
const emitter = mitt();

const app = createApp(App)

app.provide("emitter", emitter)

app.use(router)

app.mount('#app')
