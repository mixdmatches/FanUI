<template>
  <div :class="bem.b()">
    <div :class="bem.e('content')" :style="{ paddingLeft: `${node.level * 16}px` }">
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
import { createNamespace } from '@Fan-ui/utils/create'
import FIcon from '@Fan-ui/components/icon'
const props = defineProps(treeNodeProps)
const emits = defineEmits(treeNodeEmit)
const bem = createNamespace('tree-node')

const handleToggle = () => {
  emits('toggle', props.node)
}
</script>
