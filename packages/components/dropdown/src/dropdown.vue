<template>
  <div :class="[bem.b(), bem.is('no-arrow', noArrow && showShadow)]">
    <f-tooltip
      ref="tooltipRef"
      pure
      :trigger="trigger"
      :no-arrow="noArrow"
      :content="content"
      :placement="placement"
      :manual="manual"
      :popperOptions="popperOptions"
      :transition="transition"
      :openDelay="openDelay"
      :closeDelay="closeDelay"
      @visible-change="visibleChange"
    >
      <slot></slot>
      <template #content>
        <slot name="dropdown"></slot>
      </template>
    </f-tooltip>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { dropdownProps, dropdownEvent, dropdownKey } from './dropdown'
import FTooltip from '@fan-ui/components/tooltip'
import { provide, ref } from 'vue'
import type { TooltipInstance } from '@fan-ui/components/tooltip/src/type'
import type { DropdownContext, DropdownInstance } from './dropdown'

const bem = createNamespace('dropdown')

const props = defineProps(dropdownProps)
const emit = defineEmits(dropdownEvent)

const visibleChange = (e: boolean) => {
  emit('visible-change', e)
}

const tooltipRef = ref<TooltipInstance>()

defineExpose<DropdownInstance>({
  open: () => tooltipRef.value?.open(),
  close: () => tooltipRef.value?.close()
})

// 注入
provide(dropdownKey, {
  hideAfterClick: props.hideAfterClick,
  tooltipRef
} as DropdownContext)
</script>
