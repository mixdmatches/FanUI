import 'vitepress-demo-plugin/dist/style.css'
import '@fan-ui/theme-chalk/src/dark/css-vars.scss'
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import FanUI from '@fan-ui/components/index.ts'

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import DataPanel from './components/DataPanel.vue'
import Confetti from './components/Confetti.vue'
// 批量导入所有 .vue 组件（包括子目录）
const modules = import.meta.glob('../../example/**/*.vue', { eager: true })

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('Confetti', Confetti) //注册全局组件
    app.component('DataPanel', DataPanel) //注册全局组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    app.use(FanUI)
    // 遍历所有组件并注册为全局组件
    Object.entries(modules).forEach(([path, module]) => {
      const match = path.match(/\/([^/]+)\.vue$/)
      if (match) {
        const name = match[1].charAt(0).toUpperCase() + match[1].slice(1)
        app.component(name, module.default)
      }
    })
  }
}
