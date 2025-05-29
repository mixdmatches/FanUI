import { createApp } from 'vue'
import App from './App.vue'
import '@fan-ui/theme-chalk/src/dark/css-vars.scss'
import '@fan-ui/theme-chalk/src/index.scss'
import install from '@fan-ui/components'

const app = createApp(App)

app.use(install)
app.mount('#app')
