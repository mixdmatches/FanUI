<template>
  <div :class="bem.b()">
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          bem.is('expanded', expanded && !node.isLeaf),
          bem.is('leaf', node.isLeaf)
        ]"
        @click="handleToggle"
      >
        <f-icon size="18">
          <right
            v-if="!(node.children.length === 0)"
            theme="outline"
            fill="#abb2bd"
            :strokeWidth="3"
          />
        </f-icon>
      </span>
      <f-checkbox
        v-if="treeContext?.checkable"
        v-model="checked"
        :indeterminate="node.indeterminate"
        @change="handleSelectChange"
      />
      <span :class="[bem.e('label')]">{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { treeNodeEmit, treeNodeProps } from './treeNode'
import { createNamespace } from '@fan-ui/utils/create'
import FIcon from '@fan-ui/components/icon'
import { Right } from '@icon-park/vue-next'
import { computed, inject } from 'vue'
import { treeContextKey } from './tree'
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
</script>
