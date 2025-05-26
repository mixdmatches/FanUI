import { ExtractPropTypes, PropType } from 'vue'
import { UploadFile } from './upload'

export const uploadListProps = {
  files: {
    type: Array as PropType<UploadFile[]>,
    default: () => [] as const
  }
}

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>
