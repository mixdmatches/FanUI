<script setup lang="ts">
import { ref, watch } from 'vue'

const expandedKeys = ref<string[]>(['0-1', '0-2', '1-1'])
const checkedKeys = ref<string[]>(['1-2-1'])
const data = ref([
  {
    title: '一级',
    key: '0-1',
    children: [
      {
        title: '二级',
        key: '1-1',
        disabled: true,
        children: [
          {
            title: '三级',
            key: '1-1-1',
            children: [
              {
                title: '四级',
                key: '1-1-1-1'
              }
            ]
          },
          {
            title: '三级',
            key: '1-1-2'
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

watch(
  () => checkedKeys.value,
  () => {
    console.log('checkedKeys', checkedKeys.value)
  }
)
</script>

<template>
  <f-tree
    v-model:expandedKeys="expandedKeys"
    v-model:checked-keys="checkedKeys"
    :data="data"
    label-field="title"
    checkable
  ></f-tree>
</template>
