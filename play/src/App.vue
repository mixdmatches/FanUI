<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
import { ref } from 'vue'
interface TreeNode {
  label: string
  key: string
  children?: TreeNode[]
}
function createTree(level: number = 4, parentKey: string = ''): TreeNode[] {
  if (!level) return []
  return new Array(level - 1).fill(0).map((_, index) => {
    const key = parentKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createTree(level - 1, `${key}-${index}`)
    }
  })
}

function createLabel(level: number): string {
  if (level === 1) return '一级'
  if (level === 2) return '二级'
  if (level === 3) return '三级'
  if (level === 4) return '四级'
  return ''
}

const treeData = ref(createTree(4))
console.log(treeData)
</script>

<template>
  <div>
    <f-icon color="red" size="20">
      <add-circle></add-circle>
    </f-icon>
    <f-button>按钮</f-button>
    <!-- <f-tree :data="treeData" :default-expanded-keys="['40','41']" label-field="xx" key-field="key" children-field="children"></f-tree> -->
  </div>
</template>
