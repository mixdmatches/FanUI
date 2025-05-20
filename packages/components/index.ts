import * as components from './components'
import { App } from 'vue'

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}

export * from './components'

export default install
