import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@Fan-ui/components/icon'
import Tree from '@Fan-ui/components/tree'
import '@Fan-ui/theme-chalk/src/index.scss'

const plugins = [Icon, Tree]

const app = createApp(App)

plugins.forEach(plugin => {
  app.use(plugin) // 注册全局组件
})
app.mount('#app')
