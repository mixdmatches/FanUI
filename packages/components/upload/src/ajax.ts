import { UploadProgressEvent } from './upload'
import { RequestOptions } from './upload-content'

export function httpRequest(options: RequestOptions) {
  const xhr = new XMLHttpRequest()
  const action = options.action
  const method = options.method.toUpperCase()
  xhr.open(method, action, true)
  xhr.upload.addEventListener('progress', e => {
    const processEvents = e as UploadProgressEvent
    processEvents.pecetange = e.total > 0 ? (e.loaded / e.total) * 100 : 0

    options.onProgress(processEvents) // 调用上传进度事件
  })

  const headers = options.headers
  if (headers) {
    for (const [key, value] of Object.entries(options.headers)) {
      xhr.setRequestHeader(key, value as string)
    }
  }

  const formData = new FormData()
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value as string)
    }
  }
  formData.append(options.name, options.file)

  xhr.onload = function () {
    if (xhr.status < 300 || xhr.status >= 200) {
      options.onSuccess(xhr.response) // 调用上传成功事件
    }
  }

  xhr.addEventListener('error', function (err) {
    options.onError(err) // 调用上传失败事件
  })
  xhr.send(formData)

  return xhr
}
