<script setup lang="ts">
import { ref } from 'vue'
import { RightOne, NotebookOne } from '@icon-park/vue-next'

const expandedKeys = ref<string[]>(['0-1', '0-2', '1-1'])
const data = ref([
  {
    label: '一级',
    key: '0-1',
    children: [
      {
        label: '二级',
        key: '1-1'
      },
      {
        label: '二级',
        key: '1-2',
        children: [
          {
            label: '三级',
            key: '1-2-1'
          }
        ]
      }
    ]
  }
])
</script>

<template>
  <f-tree v-model:expandedKeys="expandedKeys" :data="data">
    <template #switch-icon="{ node }">
      <right-one theme="outline" size="24" fill="#abb2bd" :strokeWidth="3" />
    </template>
    <template #icon="{ node }">
      <notebook-one
        theme="outline"
        size="24"
        :fill="node.isLeaf ? '#abb2bd' : '#61afef'"
        :strokeWidth="3"
      />
    </template>
  </f-tree>
</template>
