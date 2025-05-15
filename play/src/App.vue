<script setup lang="ts">
import FFormItem from '@Fan-ui/components/form/index.ts'
import { ref } from 'vue'
import FInput from '@Fan-ui/components/input/index.ts'
// import { Search } from '@icon-park/vue-next'
// import { ref } from 'vue'

// interface TreeNode {
//   label: string
//   key: string
//   children?: TreeNode[]
// }

// function createTree(level: number = 4, parentKey: string = ''): TreeNode[] {
//   if (!level) return []
//   return new Array(level - 1).fill(0).map((_, index) => {
//     const key = parentKey + level + index
//     return {
//       label: createLabel(level),
//       key,
//       children: createTree(level - 1, `${key}-${index}`)
//     }
//   })
// }

// function createLabel(level: number): string {
//   if (level === 1) return '一级'
//   if (level === 2) return '二级'
//   if (level === 3) return '三级'
//   if (level === 4) return '四级'
//   return ''
// }

// const treeData = ref(createTree(4))
const user = ref({ username: '', password: '' })
</script>

<template>
  <f-form-item
    label="姓名"
    :prop="user.username"
    :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
      {
        min: 6,
        max: 10,
        message: '用户名6-10',
        trigger: ['blur', 'change']
      }
    ]"
  >
    <f-input v-model="user.username" placeholder="请输入"></f-input>
  </f-form-item>
</template>
