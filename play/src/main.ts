import { createApp } from 'vue'
import App from './App.vue'

// 引入样式文件
import '../../build/index.css'
// 全部引入
import FanUI from '../../build'

const app = createApp(App)

app.use(FanUI) 
app.mount('#app')
