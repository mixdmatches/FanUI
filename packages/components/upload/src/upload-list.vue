<template>
  <transition-group tag="ul" :class="containerKls" :name="nsList.b()">
    <!-- 单个file -->
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[
        nsUpload.be('list', 'item'),
        nsUpload.is('success', file.status)
      ]"
    >
      <!-- file-info -->
      <div :class="nsUpload.be('list', 'item-info')">
        <a :class="nsUpload.be('list', 'item-name')">
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
  </transition-group>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { uploadListProps } from './upload-list'
import { createNamespace } from '@fan-ui/utils/create'
import { FIcon } from '@fan-ui/components/icon'
import { DocDetail, CheckOne, Close } from '@icon-park/vue-next'

defineProps(uploadListProps)

const emit = defineEmits(['remove'])

const nsUpload = createNamespace('upload')
const nsList = createNamespace('list')
const nsIcon = createNamespace('icon')

const containerKls = computed(() => {
  return [nsUpload.b('list')]
})

const handleRemove = file => {
  emit('remove', file)
}
</script>
