<template>
  <li v-if="divider" role="separator" :class="bem.em('menu', 'separator')"></li>
  <li
    @click="itemClick"
    :class="[
      bem.e('item'),
      bem.is('divider', divider!),
      bem.is('disabled', disabled!)
    ]"
  >
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { inject } from 'vue'
import { type DropdownContext, dropdownKey } from './dropdown'

defineOptions({
  name: 'f-dropdown-item'
})

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  divider: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const bem = createNamespace('dropdown')

const { hideAfterClick, tooltipRef } = inject(dropdownKey) as DropdownContext

const itemClick = () => {
  if (props.disabled) return
  if (hideAfterClick) {
    tooltipRef.value?.close()
  }
  emit('click')
}
</script>
