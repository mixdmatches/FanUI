<template>
  <transition :name="bem.b('fade')">
    <div :class="[bem.b(), bem.m(type), bem.is('plain', plain)]">
      <f-icon :class="[bem.e('icon'), bem.bm('icon', type)]">
        <component :is="IconCompMap[type]"></component>
      </f-icon>
      <span :class="[bem.e('content')]">{{ message }}</span>
      <f-icon v-if="showClose" :class="bem.e('closeBtn')" @click="close">
        <Close></Close>
      </f-icon>
    </div>
  </transition>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { FIcon } from '@fan-ui/components'
import { messageProps } from './props'
import { createNamespace } from '@fan-ui/utils/create'
import { Info, CheckOne, CloseOne, Attention, Close } from '@icon-park/vue-next'

const IconCompMap = {
  info: Info,
  success: CheckOne,
  warning: Attention,
  error: CloseOne
}

const bem = createNamespace('message')

defineOptions({
  name: 'f-message'
})

defineProps(messageProps)

const emit = defineEmits(['close'])

const instance = getCurrentInstance()

const close = () => {
  emit('close', instance.vnode.el.parentElement)
}
</script>
