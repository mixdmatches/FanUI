import DefaultTheme from 'vitepress/theme'

import FIcon from '@Fan-ui/components/icon'
import '@Fan-ui/theme-chalk/src/index.scss'
console.log(FIcon)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FIcon', FIcon)
  }
}
