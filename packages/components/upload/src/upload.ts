import { ExtractPropTypes, PropType } from 'vue'
import {
  UploadFile,
  UploadFiles,
  UploadProgressEvent,
  UploadRawFile
} from './types'

export const baseProps = {
  fileList: {
    type: Array as PropType<UploadFiles>,
    default: () => [] as const
  },
  action: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  // input中需要的属性
  name: {
    type: String,
    default: 'file'
  },
  accept: {
    type: String,
    default: ''
  },
  // 上传文件调用ajax需要的
  method: {
    type: String,
    default: 'post'
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  },
  drag: {
    type: Boolean,
    default: false
  },
  showFileList: {
    type: Boolean,
    default: true
  }
} as const

const NOOP = () => {}

export const uploadProps = {
  ...baseProps,
  // 预览文件
  onPreview: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  },
  beforeUpload: {
    type: Function as PropType<
      (file: UploadRawFile) => Promise<boolean> | boolean
    >,
    default: NOOP
  },
  onChange: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  },
  beforeRemove: {
    type: Function as PropType<
      (file: UploadFile, uploadFiles: UploadFiles) => Promise<boolean> | boolean
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<
      (file: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  onProgress: {
    type: Function as PropType<
      (e: UploadProgressEvent, file: UploadFile, files: UploadFiles) => void
    >,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<
      (
        response: unknown,
        uploadFile: UploadFile,
        uploadFiles: UploadFiles
      ) => void
    >,
    default: NOOP
  },
  onError: {
    type: Function as PropType<
      (
        response: unknown,
        uploadFile: UploadFile,
        uploadFiles: UploadFiles
      ) => void
    >,
    default: NOOP
  }
} as const

export type UploadProps = Partial<ExtractPropTypes<typeof uploadProps>>

let id = 0
export const genId = () => id++
