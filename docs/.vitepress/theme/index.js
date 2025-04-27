import './style/style.css'
import DefaultTheme from 'vitepress/theme'
import FanUI from '@Fan-ui/components/index.ts'

// 批量导入所有 .vue 组件（包括子目录）
const modules = import.meta.glob('../../example/**/*.vue', { eager: true })

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
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
