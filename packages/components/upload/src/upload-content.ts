import type { ExtractPropTypes, PropType } from 'vue'
import { baseProps, uploadProps } from './upload'
import type { UploadFile, UploadProgressEvent, UploadRawFile } from './types'

const NOOP = () => {}

export const uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps['beforeUpload'],
  onStart: {
    type: Function as PropType<(rawFiled: UploadRawFile) => void>,
    default: NOOP
  },
  onProgress: {
    type: Function as PropType<
      (e: UploadProgressEvent, rawFile: UploadRawFile) => void
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<
      (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void
    >,
    default: NOOP
  },
  onError: {
    type: Function as PropType<(err: unknown, rawFile: UploadRawFile) => void>,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<(res: unknown, rawFile: UploadRawFile) => void>,
    default: NOOP
  }
} as const

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>
