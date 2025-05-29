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
import { UploadContentProps } from './upload-content'

defineOptions({
  name: 'f-upload'
})

const props = defineProps(uploadProps)
const emit = defineEmits(['update:file-list'])
const uploadFiles = ref<UploadFiles>(props.fileList)

watch(uploadFiles, newVal => {
  // 监控文件变化发射事件
  emit('update:file-list', newVal)
})

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
  uploadFile!.status = 'uploading'
  uploadFile!.percentage = e.pecetange
  props.onProgress(e, uploadFile, uploadFiles.value)
}

const handleRemove: UploadContentProps['onRemove'] = async (
  rawFile
): Promise<void> => {
  const uploadFile = findFile(rawFile as UploadRawFile)
  const r = await props.beforeRemove(uploadFile, uploadFiles.value)
  if (!r) {
    const fileList = uploadFiles.value
    fileList.splice(fileList.indexOf(uploadFile), 1)
    props.onRemove(uploadFile, fileList)
  }
}

const handleError: UploadContentProps['onError'] = (err, rawFile) => {
  const uploadFile = findFile(rawFile)
  uploadFile!.status = 'error'
  const fileList = uploadFiles.value
  uploadFile!.status = 'error'
  fileList.splice(fileList.indexOf(uploadFile), 1)
  props.onError(err, uploadFile, fileList)
}

const handleSuccess: UploadContentProps['onSuccess'] = (res, rawFile) => {
  const uploadFile = findFile(rawFile)
  uploadFile!.status = 'success'
  const fileList = uploadFiles.value
  props.onSuccess(res, uploadFile, fileList)
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
