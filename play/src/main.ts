import { createApp } from 'vue'
import App from './App.vue'
// 全部引入
import FanUI from '@Fan-ui/components'
const app = createApp(App)
// =========
// 按需引入
// import Icon from '@Fan-ui/components/icon'
// import Tree from '@Fan-ui/components/tree'
// const plugins = [Icon, Tree]
// plugins.forEach(plugin => {
//   app.use(plugin) // 注册全局组件
// })
// =========
app.use(FanUI)
app.mount('#app')
