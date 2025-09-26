import type { ExtractPropTypes, PropType } from 'vue'
import type { UploadFile } from './types'

export const uploadListProps = {
  files: {
    type: Array as PropType<UploadFile[]>,
    default: () => [] as const
  }
} as const

export const uploadListEmits = {
  remove: (file: UploadFile) => !!file
}

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>
export type UploadListEmits = typeof uploadListEmits
