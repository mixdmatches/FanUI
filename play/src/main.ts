import { createApp } from 'vue'
import App from './App.vue'
import '@Fan-ui/theme-chalk/src/index.scss'
import install from '@Fan-ui/components'

const app = createApp(App)
app.use(install)
app.mount('#app')
