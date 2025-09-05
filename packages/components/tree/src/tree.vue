<template>
  <div :class="bem.b()">
    <f-tree-node
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
      :expanded="false"
      @toggle="toggleExpand"
    ></f-tree-node>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TreeNode, TreeOption, treeProps } from './tree'
import FTreeNode from './TreeNode.vue'
import { createNamespace } from '@fan-ui/utils/create'

defineOptions({ name: 'f-tree' })
const props = defineProps(treeProps)

const bem = createNamespace('tree')

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

const treeOptions = createOption(
  props.labelField,
  props.keyField,
  props.childrenField
)

// 有了props要对用户数据进行格式化，格式化一个固定结果
// 格式化后的结点 label, key,chilldren
const tree = ref<TreeNode[]>([])
// 格式化数据函数
function createTree(data: TreeOption[]): TreeNode[] {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
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
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  return traversal(data)
}
// 格式化用户props传递的数据
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
  },
  { immediate: true }
)

// 需要展开的key
const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))

// 拍平树
const flattenTree = computed(() => {
  let expandedKeys = expandedKeysSet.value // 需要展开的key
  let flattenNodes: TreeNode[] = [] // 拍平后的结果
  const nodes = tree.value || [] //格式化后的节点
  const stack: TreeNode[] = [] //遍历树的栈
  for (let i = nodes.length - 1; i >= 0; i--) {
    stack.push(nodes[i])
  }
  // 深度遍历
  while (stack.length > 0) {
    const node = stack.pop()! // 取出栈顶元素
    flattenNodes.push(node) // 拍平
    // 展开
    if (expandedKeys.has(node.key)) {
      const children = node.children || []
      for (let j = children.length - 1; j >= 0; j--) {
        stack.push(children[j])
      }
    }
  }
  return flattenNodes
})

// 判断是否展开
// function isExpanded(node: TreeNode): boolean {
//   return expandedKeysSet.value.has(node.key)
// }

// 折叠功能
function collpase(node: TreeNode) {
  expandedKeysSet.value.delete(node.key)
}

//展开功能
function expand(node: TreeNode) {
  expandedKeysSet.value.add(node.key)
}

// 切换展开
function toggleExpand(node: TreeNode) {
  const expandedKeys = expandedKeysSet.value
  if (expandedKeys.has(node.key)) {
    collpase(node)
  } else {
    expand(node)
  }
}
</script>
