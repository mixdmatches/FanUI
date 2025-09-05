<template>
  <div :class="bem.b()">
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
        @click="handleToggle()"
      >
        <f-icon size="25">
          <Switcher></Switcher>
        </f-icon>
      </span>
      <span>{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Switcher from './icon/Switcher.vue'
import { treeNodeEmit, treeNodeProps } from './tree'
import { createNamespace } from '@fan-ui/utils/create'
import FIcon from '@fan-ui/components/icon'

defineOptions({
  name: 'f-tree-node'
})

const props = defineProps(treeNodeProps)
const emits = defineEmits(treeNodeEmit)
const bem = createNamespace('tree-node')

const handleToggle = () => {
  emits('toggle', props.node)
}
</script>
