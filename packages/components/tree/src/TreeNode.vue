<template>
  <div
    ref="node$"
    :class="[bem.b()]"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
    :draggable="draggable"
  >
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        v-if="!node.isLeaf"
        :class="[
          bem.e('expand-icon'),
          bem.is('expanded', expanded && !node.isLeaf)
        ]"
        @click="handleToggle"
      >
        <f-icon size="18" :class="bem.is('loading', isLoading)">
          <template v-if="!isLoading">
            <slot name="switch-icon" :node="node">
              <right theme="outline" fill="#abb2bd" :strokeWidth="3" />
            </slot>
          </template>
          <loading-four
            v-else
            theme="outline"
            fill="#abb2bd"
            :strokeWidth="3"
          />
        </f-icon>
      </span>
      <span v-else :class="bem.e('expand-icon-placeholder')"></span>
      <f-checkbox
        v-if="treeContext?.checkable"
        v-model="checked"
        :indeterminate="node.indeterminate"
        @change="handleSelectChange"
      />

      <span :class="[bem.e('label'), bem.e('label-top-line')]">
        <f-icon size="18" v-if="$slots.icon">
          <slot name="icon" :node="node"> </slot>
        </f-icon>
        {{ node?.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { treeNodeEmit, treeNodeProps } from './treeNode'
import { createNamespace } from '@fan-ui/utils/create'
import FIcon from '@fan-ui/components/icon'
import { Right, LoadingFour } from '@icon-park/vue-next'
import { computed, inject, ref } from 'vue'
import { type DragNodeContext, dragNodeKey, treeContextKey } from './tree'
import { CheckboxValueType } from '@fan-ui/components/checkbox'

defineOptions({
  name: 'f-tree-node'
})

const props = defineProps(treeNodeProps)
const emits = defineEmits(treeNodeEmit)
const bem = createNamespace('tree-node')

const treeContext = inject(treeContextKey, undefined)

const checked = computed(() => {
  return treeContext?.checkedKeys.value.has(props.node.key) ?? false
})

const handleSelectChange = (checked: CheckboxValueType) => {
  emits('checkedChange', checked as boolean, props.node)
}

const handleToggle = () => {
  emits('toggle', props.node)
}

const isLoading = computed(() => props.loadingKeys.has(props.node.key))

const node$ = ref<HTMLElement | null>()

const dragNodeEvent: DragNodeContext = inject(dragNodeKey)!

// 开始拖拽
const handleDragStart = (event: DragEvent) => {
  if (!props.draggable) return
  if (node$.value) {
    dragNodeEvent.treeNodeDragStart({
      event,
      node: { $el: node$.value, treeNode: props.node }
    })
  }
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  if (node$.value) {
    dragNodeEvent.treeNodeDragOver({
      event,
      node: { $el: node$.value, treeNode: props.node }
    })
  }
}

const handleDragEnd = (event: DragEvent) => {
  if (!props.draggable) return
  if (node$.value) {
    dragNodeEvent.treeNodeDragEnd({
      event,
      node: { $el: node$.value, treeNode: props.node }
    })
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
}
</script>
