import { FMessage } from './src/message'

declare module 'vue' {
  export interface GlobalComponents {
    FMessage: typeof FMessage
  }
}

export * from './src/props'

export { FMessage }

export default FMessage
