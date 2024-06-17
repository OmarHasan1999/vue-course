import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// mitt config
import mitt from "mitt"
const emit = mitt()

const app = createApp(App)

app.provide("emitter", emit).use(router)

app.mount('#app')
