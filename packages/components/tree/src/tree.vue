<template>
  <div>树</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { treeProps, TreeNode, TreeOption } from './tree'
defineOptions({ name: 'f-tree' })
const props = defineProps(treeProps)

const createOption = (label: string, key: string, children: string) => {
  return {
    getLabel(node: TreeOption) {
      return node.label as string
    },
    getKey(node: TreeOption) {
      return node[key] as string
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[]
    }
  }
}

const treeOptions = createOption(props.labelField, props.keyField, props.childrenField)

// 有了props要对用户数据进行格式化，格式化一个固定结果
// label, key,chilldren
const tree = ref<TreeNode[]>([])
// 格式化数据函数
function createTree(data: TreeOption[]): any {
  function tranversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map((node: TreeOption) => {
      const children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        label: treeOptions.getLabel(node),
        key: treeOptions.getKey(node),
        children: [],
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0
      }
      if (children.length > 0) {
        treeNode.children = tranversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = tranversal(data)
  return result
}
// 格式化用户props传递的数据
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
    console.log(tree.value)
  },
  { immediate: true }
)
</script>
