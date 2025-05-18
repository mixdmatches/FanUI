<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  {{ uploadFiles }}
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { UploadFile, UploadFiles, uploadProps, UploadRawFile } from './upload'
import UploadContent from './upload-content.vue'
import { UploadContentProps } from './upload-content'

defineOptions({
  name: 'z-upload'
})
const props = defineProps(uploadProps)
const emit = defineEmits(['update:file-list'])
const uploadFiles = ref<UploadFiles>(props.FileList)

watch(uploadFiles, newVal => {
  // 监控文件变化发射事件
  emit('update:file-list', newVal)
})

const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find(file => file.uid === rawFile.uid)!
}

const uploadContentProps = computed<UploadContentProps>(() => {
  return {
    ...props,
    onStart: rawFiled => {
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
    },
    onProgress: (e, rawFile) => {
      // 上传中逻辑
      const uploadFile = findFile(rawFile)
      uploadFile!.status = 'uploading'
      uploadFile!.percentage = e.pecetange
      props.onProgress(e, uploadFile, uploadFiles.value)
    },
    onRemove: async rawFile => {
      // 上传后逻辑
      const uploadFile = findFile(rawFile)
      const r = await props.beforeRemove(uploadFile, uploadFiles.value) // 调用父组件的onRemove方法
      if (!r) {
        const fileList = uploadFiles.value
        fileList.splice(fileList.indexOf(uploadFile), 1) // 删除文件
        props.onRemove(uploadFile, fileList) // 调用父组件的onChange方法
      }
    },
    onError: (err, rawFile) => {
      const uploadFile = findFile(rawFile)
      uploadFile!.status = 'error'
      const fileList = uploadFiles.value
      uploadFile!.status = 'error'
      fileList.splice(fileList.indexOf(uploadFile), 1) // 删除文件
      props.onError(err, uploadFile, fileList) // 调用父组件的onChange方法
    },
    onSuccess: (res, rawFile) => {
      const uploadFile = findFile(rawFile)
      uploadFile!.status = 'success'
      const fileList = uploadFiles.value
      props.onSuccess(res, uploadFile, fileList) // 调用父组件的onChange方法
    }
  }
})
</script>
