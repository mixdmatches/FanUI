<template>
  <div :class="bem.b" v-on="outerEvents" ref="popperContainer">
    <div :class="bem.be('tooltip', 'trigger')" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <div :class="bem.be('tooltip', 'popper')" ref="popperNode" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { tooltipProps } from './tooltip'
import { TooltipEmits, TooltipInstance } from './type'
import { onUnmounted, reactive, ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { useClickOutside } from './useClickOutside'

const bem = createNamespace('tooltip')

const props = defineProps(tooltipProps)
const emit = defineEmits<TooltipEmits>()

const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainer = ref<HTMLElement>()

let popperInstance: Instance | null = null
let events: Record<string, unknown> = reactive({})
let outerEvents: Record<string, unknown> = reactive({})

watch(
  isOpen,
  val => {
    if (val) {
      if (triggerNode && popperNode) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement
        })
      } else {
        popperInstance?.destroy()
      }
    }
  },
  // dom节点生成再进行调用
  { flush: 'post' }
)

watch(
  () => props.trigger,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      events = {}
      outerEvents = {}
      attachEvents()
    }
  }
)

watch(
  () => props.manual,
  isManual => {
    if (isManual) {
      Object.keys(events).forEach(key => delete events[key])
      Object.keys(outerEvents).forEach(key => delete outerEvents[key])
    } else {
      attachEvents()
    }
  }
)

const triggerPopper = () => {
  isOpen.value = !isOpen.value
  emit('visible-change', isOpen.value)
}

const open = () => {
  isOpen.value = true
  emit('visible-change', true)
}
const close = () => {
  isOpen.value = false
  emit('visible-change', false)
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  }
  if (props.trigger === 'click') {
    events['click'] = triggerPopper
  }
}

const initEvents = () => {
  if (!props.manual) {
    attachEvents()
  } else {
    Object.keys(events).forEach(key => delete events[key])
    Object.keys(outerEvents).forEach(key => delete outerEvents[key])
  }
}

initEvents()

useClickOutside(popperContainer, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
})

defineExpose<TooltipInstance>({
  open,
  close
})

onUnmounted(() => {
  popperInstance?.destroy()
})
</script>
