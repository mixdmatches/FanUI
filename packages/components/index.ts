import * as components from './components'
import { App } from 'vue'

const FUNCTION_COMP = ['TMessage']
const DIRECTIVE_COMP = ['FLoading']

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key)) app.component(key, value)
    if (DIRECTIVE_COMP.includes(key)) {
      app.use(value)
    }
  })
}

export * from './components'

export const FMessage = components.FMessage
export const FLoading = components.FLoading

export default install
