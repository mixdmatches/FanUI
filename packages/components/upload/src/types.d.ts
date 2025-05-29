// 格式化用户上传文件的文件类型
export interface UploadFile {
  uid: number
  name: string
  url?: string // URL.createObjectURL()
  percentage?: number
  raw?: UploadRawFile // 原始文件
  size?: number //上传文件大小
  status: string // 上传状态
}

export type UploadFiles = UploadFile[]

// 用户手动上传的原始文件类型
export type UploadRawFile = File & { uid: number }

export type UploadProgressEvent = ProgressEvent & { percent: number }

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
