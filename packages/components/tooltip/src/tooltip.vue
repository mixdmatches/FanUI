<template>
  <div :class="bem.b()" v-on="outerEvents" ref="popperContainer">
    <div :class="bem.e('trigger')" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <transition :name="transition">
      <div
        :class="[bem.e('popper'), bem.is('pure', pure)]"
        ref="popperNode"
        v-if="isOpen"
        @mouseenter="handlePopperMouseEnter"
        @mouseleave="handlePopperMouseLeave"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div
          :class="bem.is('no-arrow', noArrow)"
          id="arrow"
          data-popper-arrow
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { tooltipProps } from './tooltip'
import { TooltipEmits, TooltipInstance } from './type'
import { computed, onUnmounted, reactive, ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { useClickOutside } from './useClickOutside'
import { debounce } from 'lodash-es'
const bem = createNamespace('tooltip')

const props = defineProps(tooltipProps)
const emit = defineEmits<TooltipEmits>()

const isOpen = ref(false)
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainer = ref<HTMLElement>()
const isMouseInPopper = ref(false)

let popperInstance: Instance | null = null
let events: Record<string, unknown> = reactive({})
let outerEvents: Record<string, unknown> = reactive({})

watch(
  isOpen,
  val => {
    if (val) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(
          triggerNode.value,
          popperNode.value,
          popperOptions.value
        )
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

const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ],
    ...props.popperOptions
  }
})

const triggerPopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}

const open = () => {
  isOpen.value = true
  emit('visible-change', true)
}

const close = () => {
  isOpen.value = false
  emit('visible-change', false)
}

const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}
const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

const handlePopperMouseEnter = () => {
  closeDebounce.cancel()
  isMouseInPopper.value = true
}

const handlePopperMouseLeave = () => {
  if (props.trigger !== 'click' && !props.manual) {
    closeFinal()
  }
  isMouseInPopper.value = false
}

const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = () => {
      if (!isMouseInPopper.value) {
        closeFinal()
      }
    }
  }
  if (props.trigger === 'click') {
    events['click'] = triggerPopper
    delete outerEvents['mouseleave']
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
    closeFinal()
  }
})

defineExpose<TooltipInstance>({
  open: openFinal,
  close: closeFinal
})

onUnmounted(() => {
  popperInstance?.destroy()
})
</script>
