import { createApp } from 'vue'
import App from './App.vue'
import '@Fan-ui/theme-chalk/src/index.scss' // 全局样式

import { FButton, FIcon } from '@Fan-ui/components'
import FInput from '@Fan-ui/components/input'
import { Form, FormItem } from '@Fan-ui/components/form'

const plugins = [Form, FormItem, FInput, FButton, FIcon]

const app = createApp(App)
plugins.forEach(plugin => {
  app.use(plugin)
})
app.mount('#app')
