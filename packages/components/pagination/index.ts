import { withInstall } from '@fan-ui/utils/with-install'
import _Pagination from './src/pagination.vue'

export const FPagination = withInstall(_Pagination)

declare module 'vue' {
  export interface GlobalComponents {
    FPagination: typeof FPagination
  }
}

export * from './src/pagination'

export default FPagination
