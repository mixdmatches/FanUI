<script setup lang="ts">
import { TreeProps } from '@fan-ui/components/tree/src/tree'
import type { TreeOption } from '@fan-ui/components/tree/src/types'
import { ref } from 'vue'

const expandedKeys = ref(['0-1', '0-2', '0-15', '0-19'])
function dig(path = '0', level = 3) {
  const list: TreeProps['data'] = []
  for (let i = 0; i < 20; i += 1) {
    const key = `${path}-${i}`
    const treeNode: TreeOption = {
      label: key,
      key
    }

    if (level > 0) {
      treeNode.children = dig(key, level - 1)
    }

    list.push(treeNode)
  }
  return list
}
</script>

<template>
  <f-tree
    v-model:expanded-keys="expandedKeys"
    checkable
    :data="dig()"
    :height="300"
  ></f-tree>
</template>
