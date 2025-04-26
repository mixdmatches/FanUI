import DefaultTheme from 'vitepress/theme'
import FanUI from '@Fan-ui/components/index.ts'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FanUI)
  }
}
