<template>
  <transition-group tag="ul" :class="containerKls" :name="nsList.b()">
    <!-- 单个file -->
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[
        nsUpload.be('list', 'item'),
        nsUpload.is(file.status, file.status)
      ]"
    >
      <!-- file-info -->
      <div :class="nsUpload.be('list', 'item-info')">
        <a
          :class="nsUpload.be('list', 'item-name')"
          v-if="file.status == 'success'"
        >
          <f-icon :class="nsIcon.m('document')">
            <DocDetail />
          </f-icon>
          <span
            :class="nsUpload.be('list', 'item-file-name')"
            :title="file.name"
          >
            {{ file.name }}
          </span>
        </a>
        <f-progress
          v-if="file.status == 'uploading'"
          :stroke-width="2"
          :percentage="Number(Number(file.percentage).toFixed(2))"
        ></f-progress>
      </div>
      <!-- file-status -->
      <label :class="nsUpload.be('list', 'item-status-label')">
        <f-icon :class="[nsIcon.m('upload-success'), nsIcon.m('circle-check')]">
          <CheckOne />
        </f-icon>
      </label>
      <f-icon :class="nsIcon.m('close')" @click="handleRemove(file)">
        <Close />
      </f-icon>
    </li>
    <slot name="append"></slot>
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import FProgress from '@fan-ui/components/index'
import { uploadListEmits, uploadListProps } from './upload-list'
import { createNamespace } from '@fan-ui/utils/create'
import { FIcon } from '@fan-ui/components/icon'
import { DocDetail, CheckOne, Close } from '@icon-park/vue-next'
import { UploadFile } from './types'

defineProps(uploadListProps)

const emit = defineEmits(uploadListEmits)

const nsUpload = createNamespace('upload')
const nsList = createNamespace('list')
const nsIcon = createNamespace('icon')

const containerKls = computed(() => {
  return [nsUpload.b('list')]
})

const handleRemove = (file: UploadFile) => {
  emit('remove', file)
}
</script>
