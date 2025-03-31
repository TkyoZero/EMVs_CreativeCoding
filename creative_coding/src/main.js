import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import p5vue from "p5vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(p5vue)

app.mount('#app')
