<script setup lang="ts">
import { ref } from 'vue'

const expandedKeys = ref<string[]>(['0-1', '0-2', '1-1'])
const data = ref([
  {
    title: '一级',
    key: '0-1',
    checked: true,
    children: [
      {
        title: '二级',
        key: '1-1',
        checked: true,
        disabled: true,
        children: [
          {
            title: '三级',
            key: '1-1-1'
          }
        ]
      },
      {
        disabled: true,
        title: '二级',
        key: '1-2',
        children: [
          {
            title: '三级',
            key: '1-2-1'
          }
        ]
      }
    ]
  },
  {
    title: '一级',
    key: '0-2',
    children: []
  }
])
</script>

<template>
  <f-tree
    v-model:expandedKeys="expandedKeys"
    :data="data"
    label-field="title"
    checkable
  ></f-tree>
</template>
