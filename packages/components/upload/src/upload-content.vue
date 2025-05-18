<template>
  <div @click="handleClick" :class="bem.b()">
    <template v-if="drag">
      <UploadDragger @file="uploadFiles">
        <slot></slot>
      </UploadDragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <input
      type="file"
      ref="inputRef"
      :class="bem.e('input')"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { genId, UploadRawFile } from './upload'
import { createNamespace } from '@Fan-ui/utils/create'
import '../style'
import { ref } from 'vue'
import { uploadContentProps } from './upload-content'
import { httpRequest } from './ajax'
import UploadDragger from './upload-dragger.vue'

const bem = createNamespace('upload')

defineOptions({
  name: 'f-upload',
  inheritAttrs: false
})

const props = defineProps(uploadContentProps)

const inputRef = ref<HTMLInputElement>()
const handleClick = () => {
  inputRef.value!.value = ''
  inputRef.value!.click()
}

const upload = async (rawFile: UploadRawFile) => {
  inputRef.value!.value = ''
  let result = await props.beforeUpload(rawFile)
  if (!result) {
    return props.onRemove(rawFile)
  } // 停止上传

  // 添加上传过程，调用ajax
  const { method, name, action, headers, data } = props
  httpRequest({
    method,
    name,
    action,
    headers,
    data,
    file: rawFile,
    onProgress: e => {
      props.onProgress(e, rawFile)
    },
    onSuccess: res => {
      props.onSuccess(res, rawFile)
    },
    onError: err => {
      props.onError(err, rawFile)
    }
  })
}

const uploadFiles = (files: FileList) => {
  for (let i = 0; i < files!.length; i++) {
    const rawFile = files![i] as UploadRawFile
    rawFile.uid = genId()
    props.onStart(rawFile)
    upload(rawFile)
  }
}

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files!
  uploadFiles(files)
}
</script>
