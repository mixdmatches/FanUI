import _Upload from './src/upload.vue'
import { withInstall } from '@fan-ui/utils/with-install'

export const FUpload = withInstall(_Upload)

declare module 'vue' {
  export interface GlobalComponents {
    FUpload: typeof FUpload
  }
}

export * from './src/upload'

export default FUpload
