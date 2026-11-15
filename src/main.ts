import { createApp } from 'vue'
import '@fontsource/redaction-50/400.css'
import './style.css'
import App from './App.vue'
import { router } from './router/index.ts'
import {createPinia} from 'pinia'
// createApp(App).mount('#app')

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')