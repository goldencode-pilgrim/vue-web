import { createApp } from 'vue'
import '@fontsource/redaction-50/400.css'
import './style.css'
import App from './App.vue'
import { router } from './router/index.ts'

// createApp(App).mount('#app')

const app = createApp(App)
app.use(router)

app.mount('#app')