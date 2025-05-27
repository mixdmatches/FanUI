import * as components from './components'
import { App } from 'vue'

const FUNCTION_COMP = ['TMessage']

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key)) app.component(key, value)
  })
}

export * from './components'

export const FMessage = components.FMessage

export default install
