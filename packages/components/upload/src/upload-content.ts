import { ExtractPropTypes, PropType } from 'vue'
import {
  baseProps,
  UploadProgressEvent,
  uploadProps,
  UploadRawFile
} from './upload'

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
    type: Function as PropType<(rawFile: UploadRawFile) => void>,
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

export type UploadContentProps = Partial<
  ExtractPropTypes<typeof uploadContentProps>
>

export interface RequestOptions {
  method: string
  file: File
  name: string
  action: string
  headers: Headers | Record<string, string>
  data: Record<string, unknown>
  onError: (e: Event) => void
  onProgress: (e: UploadProgressEvent) => void
  onSuccess: (res: unknown) => void
}
