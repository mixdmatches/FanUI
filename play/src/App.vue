<template>
  <div>
    <f-upload
      v-model:file-list="fileList"
      action="http://localhost:3000/upload"
      multiple
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
    >
      <f-button :icon="Upload" type="primary">上传</f-button>
      <template #tip>
        <div class="f-upload__tip">不超过500kb</div>
      </template>
    </f-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from '@icon-park/vue-next'
import type { UploadProps } from '@fan-ui/components/upload'
const fileList = ref([])
const handleRemove: UploadProps['onRemove'] = (file, fileList) => {
  console.log(file, fileList)
}
const beforeRemove: UploadProps['beforeRemove'] = (file, fileList) => {
  console.log(file, fileList)
  return false
}
</script>
