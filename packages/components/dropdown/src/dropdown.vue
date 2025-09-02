<template>
  <div :class="bem.b()">
    <f-tooltip
      ref="tooltipRef"
      :trigger="trigger"
      @visible-change="visibleChange"
    >
      <slot></slot>
      <template #content>
        <ul :class="bem.e('menu')">
          <template v-for="item in menuOptions" :key="item.key">
            <li
              v-if="item.divider"
              role="separator"
              :class="bem.em('menu', 'separator')"
            ></li>
            <li
              :class="[
                bem.e('item'),
                bem.is('divider', item.divider!),
                bem.is('disabled', item.disabled!),
                bem.is('active', currentActiveItem.key == item.key)
              ]"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVNode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </f-tooltip>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@fan-ui/utils'
import { dropdownProps, dropdownEvent } from './dropdown'
import FTooltip from '@fan-ui/components/tooltip/src/tooltip.vue'
import { ref } from 'vue'
import type { TooltipInstance } from '@fan-ui/components/tooltip/src/type'
import type { DropdownInstance, MenuOption } from './dropdown'
import RenderVNode from '../../common/RenderVNode'

const bem = createNamespace('dropdown')

const props = defineProps(dropdownProps)
const emit = defineEmits(dropdownEvent)

const currentActiveItem = ref<MenuOption>(props.menuOptions[0])

const visibleChange = (e: boolean) => {
  emit('visible-change', e)
}

const itemClick = (e: MenuOption) => {
  if (e.disabled) return
  currentActiveItem.value = e
  console.log(currentActiveItem.value)
  emit('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.close()
  }
}

const tooltipRef = ref<TooltipInstance>()

defineExpose<DropdownInstance>({
  open: () => tooltipRef.value?.open(),
  close: () => tooltipRef.value?.close()
})
</script>
