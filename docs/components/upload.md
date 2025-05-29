# Upload上传

通过点击或拖拽上传

## 基础用法

通过 slot 你可以传入自定义的上传按钮类型和文字提示,可通过设置 before-remove 来阻止文件移除操作。

<demo vue="../example/upload/Basic.vue"/>

## 拖拽上传

你可以将文件拖拽到特定区域以进行上传。
<demo vue="../example/upload/Drag.vue"/>

## API

### 属性

| 属性名       | 类型                                                                            | 默认值  | 说明                                      |
| ------------ | ------------------------------------------------------------------------------- | ------- | ----------------------------------------- |
| fileList     | `UploadFile[]`                                                                  | `[]`    | 上传的文件列表                            |
| action       | `string`                                                                        | `-`     | 上传的地址                                |
| multiple     | `boolean`                                                                       | `false` | 是否支持多选文件                          |
| name         | `string`                                                                        | `file`  | 上传文件的名称                            |
| accept       | `string`                                                                        | `-`     | 接受上传的文件类型                        |
| method       | `string`                                                                        | `post`  | 上传的请求方法                            |
| headers      | `Object`                                                                        | `{}`    | 上传请求的头部信息                        |
| data         | `Object`                                                                        | `{}`    | 上传请求的数据                            |
| drag         | `boolean`                                                                       | `false` | 是否支持拖拽上传                          |
| showFileList | `boolean`                                                                       | `true`  | 是否显示文件列表                          |
| onPreview    | `(file: UploadFile) => void`                                                    | `-`     | 文件预览回调                              |
| beforeUpload | `(file: UploadRawFile) => Promise<boolean> \| boolean`                          | `-`     | 上传前的钩子，返回 `false` 则停止上传     |
| onChange     | `(file: UploadFile) => void`                                                    | `-`     | 文件状态改变时的回调                      |
| beforeRemove | `(file: UploadFile, uploadFiles: UploadFiles) => Promise<boolean> \| boolean`   | `-`     | 文件移除前的钩子，返回 `false` 则阻止移除 |
| onRemove     | `(file: UploadFile, uploadFiles: UploadFiles) => Promise<boolean> \| boolean`   | `-`     | 文件移除时的回调                          |
| onProgress   | `(e: UploadProgressEvent, file: UploadFile, files: UploadFiles) => void`        | `-`     | 文件上传进度的回调                        |
| onSuccess    | `(response: unknown, uploadFile: UploadFile, uploadFiles: UploadFiles) => void` | `-`     | 文件上传成功的回调                        |
| onError      | `(response: unknown, uploadFile: UploadFile, uploadFiles: UploadFiles) => void` | `-`     | 文件上传失败的回调                        |

### 事件

| 事件名       | 回调参数                                                              | 说明                                    |
| ------------ | --------------------------------------------------------------------- | --------------------------------------- |
| onPreview    | `file: UploadFile`                                                    | 文件预览时触发                          |
| beforeUpload | `file: UploadRawFile`                                                 | 上传前触发，返回 `false` 则停止上传     |
| onChange     | `file: UploadFile`                                                    | 文件状态改变时触发                      |
| beforeRemove | `file: UploadFile, uploadFiles: UploadFiles`                          | 文件移除前触发，返回 `false` 则阻止移除 |
| onRemove     | `file: UploadFile, uploadFiles: UploadFiles`                          | 文件移除时触发                          |
| onProgress   | `e: UploadProgressEvent, file: UploadFile, files: UploadFiles`        | 文件上传进度改变时触发                  |
| onSuccess    | `response: unknown, uploadFile: UploadFile, uploadFiles: UploadFiles` | 文件上传成功时触发                      |
| onError      | `response: unknown, uploadFile: UploadFile, uploadFiles: UploadFiles` | 文件上传失败时触发                      |
