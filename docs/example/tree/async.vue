<script setup lang="ts">
import { TreeOption } from '@fan-ui/components/tree/src/types'
import { ref } from 'vue'

const data = ref([
  {
    label: 'Out of Tao, One is born',
    key: '0-1',
    isLeaf: false
  },
  {
    label: 'Out of Tao, One is born',
    key: '0-2',
    isLeaf: false
  }
])

function nextLabel(currentLabel?: string | number): string {
  if (!currentLabel) return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three')
    return 'Out of Three, the created universe'
  if (currentLabel === 'Out of Three, the created universe')
    return 'Out of Tao, One is born'
  return ''
}

function handleLoadData(node: TreeOption) {
  return new Promise<TreeOption[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ])
    }, 1000)
  })
}
</script>

<template>
  <f-tree :data="data" :on-load="handleLoadData"></f-tree>
</template>
