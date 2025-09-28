<template>
  <!-- 主区域 -->
  <!-- 根据类型错误提示，可能需要调整上传内容组件的属性传递，这里先尝试进行类型断言以绕过类型检查 -->
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <slot name="tip" />
  <!-- 上传列表展示 -->
  <UploadList
    v-if="showFileList"
    :files="uploadFiles"
    @remove="handleRemove"
  ></UploadList>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { uploadProps } from './upload'
import type { UploadFile, UploadFiles, UploadRawFile } from './types'
import UploadContent from './upload-content.vue'
import UploadList from './upload-list.vue'
import type { UploadContentProps } from './upload-content'

defineOptions({
  name: 'f-upload'
})

const props = defineProps(uploadProps)
const emit = defineEmits(['update:file-list'])
const uploadFiles = ref<UploadFiles>(props.fileList)

watch(uploadFiles, newVal => {
  emit('update:file-list', newVal)
})

function removeFile(uploadFile: UploadFile) {
  uploadFiles.value = uploadFiles.value.filter(
    file => file.uid !== uploadFile.uid
  )
}

const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find(file => file.uid === rawFile.uid)!
}

const handleStart: UploadContentProps['onStart'] = rawFiled => {
  const uploadFile: UploadFile = {
    uid: rawFiled.uid,
    name: rawFiled.name,
    raw: rawFiled,
    size: rawFiled.size,
    status: 'start'
  }
  // url实现预览
  uploadFile.url = URL.createObjectURL(rawFiled)
  uploadFiles.value = [...uploadFiles.value, uploadFile]
  props.onChange(uploadFile)
}

const handleProgress: UploadContentProps['onProgress'] = (e, rawFile) => {
  const uploadFile = findFile(rawFile)
  uploadFile.status = 'uploading'
  uploadFile.percentage = e.percent
  props.onProgress(e, uploadFile, uploadFiles.value)
}

const handleRemove: UploadContentProps['onRemove'] = async (
  rawFile
): Promise<void> => {
  const uploadFile = findFile(rawFile as UploadRawFile)
  const r = await props.beforeRemove(uploadFile, uploadFiles.value)
  if (!r) {
    removeFile(uploadFile)
    props.onRemove(uploadFile, uploadFiles.value)
    if (uploadFile.url?.startsWith('blob:')) {
      URL.revokeObjectURL(uploadFile.url)
    }
  }
}

const handleError: UploadContentProps['onError'] = (err, rawFile) => {
  const uploadFile = findFile(rawFile)
  uploadFile!.status = 'error'
  removeFile(uploadFile)
  props.onError(err, uploadFile, uploadFiles.value)
}

const handleSuccess: UploadContentProps['onSuccess'] = (res, rawFile) => {
  const uploadFile = findFile(rawFile)
  uploadFile!.status = 'success'
  props.onSuccess(res, uploadFile, uploadFiles.value)
}

const uploadContentProps = computed(() => ({
  ...props,
  onStart: handleStart,
  onProgress: handleProgress,
  onRemove: handleRemove,
  onError: handleError,
  onSuccess: handleSuccess
}))
</script>
