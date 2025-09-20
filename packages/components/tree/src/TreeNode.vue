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
        :indeterminate="indeterminate"
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
import { computed, inject, ref, watch } from 'vue'
import { treeContextKey } from './tree'

defineOptions({
  name: 'f-tree-node'
})

const props = defineProps(treeNodeProps)
const emits = defineEmits(treeNodeEmit)
const bem = createNamespace('tree-node')

const treeContext = inject(treeContextKey, undefined)

const checked = ref(treeContext?.checkedKeys.value.has(props.node.key) ?? false)
const indeterminate = computed(() => {
  // 1.叶子节点没有indeterminate状态
  if (props.node.children.length === 0) {
    return false
  }
  // 计算当前节点的选中子节点数量
  const checkedCount = props.node.children.filter(child =>
    treeContext?.checkedKeys.value.has(child.key)
  ).length

  // 有选中但未全选
  return checkedCount > 0 && checkedCount < props.node.children.length
})
const handleSelectChange = checked => {
  emits('checkedChange', checked, props.node)
}
watch(
  () => treeContext?.checkedKeys.value,
  newVal => {
    checked.value = newVal?.has(props.node.key) as boolean
  }
)

const handleToggle = () => {
  emits('toggle', props.node)
}
</script>
