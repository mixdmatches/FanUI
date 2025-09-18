<template>
  <div :class="bem.b()">
    <f-tree-node
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
      :expanded="isExpanded(node)"
      @toggle="toggleExpand"
      @checkedChange="handleCheckedChange"
    ></f-tree-node>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { treeContextKey, treeEvent, treeProps } from './tree'
import FTreeNode from './TreeNode.vue'
import { createNamespace } from '@fan-ui/utils/create'
import { TreeNode, TreeOption } from './types'

defineOptions({ name: 'f-tree' })

const props = defineProps(treeProps)
const emit = defineEmits(treeEvent)

const bem = createNamespace('tree')

const createOption = (label: string, key: string, children: string) => {
  return {
    getLabel(node: TreeOption) {
      return node[label] as string
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
// 格式化后的结点 label, key, children
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
        isLeaf: node.isLeaf ?? children.length === 0,
        parent: parent ?? undefined
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

// 拍平树--太难了
const flattenTree = computed(() => {
  let _expandedKeys = expandedKeys.value // 需要展开的key
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
    if (_expandedKeys.has(node.key)) {
      const children = node.children || []
      for (let j = children.length - 1; j >= 0; j--) {
        stack.push(children[j])
      }
    }
  }
  return flattenNodes
})

// 需要展开的key
const expandedKeys = ref(new Set(props.expandedKeys))

watch(
  () => expandedKeys.value,
  newVal => {
    emit('update:expandedKeys', [...newVal])
  }
)

// 受控选中checked
const checkedKeys = ref(new Set(props.checkedKeys))

watch(
  () => checkedKeys.value,
  newVal => {
    emit('update:checkedKeys', [...newVal])
    if (tree.value) {
      tree.value.forEach(node => {
        updateAllParentNodesStatus(node)
      })
    }
  }
)
// 递归更新所有父节点状态
function updateAllParentNodesStatus(node: TreeNode) {
  if (node.parent) {
    checkParentNodeStatus(node)
    updateAllParentNodesStatus(node.parent)
  }
}

// 检查父节点状态
// 1. 检查当前父节点的所有子节点是否都被选中
// 2. 如果所有子节点都选中，父节点选中 checkedKeys.add()
// 3. 如果部分子节点选中，父节点indeterminate
// 4. 如果没有子节点选中，父节点取消选中 checkedKeys.delete()
function checkParentNodeStatus(node: TreeNode) {
  let currentNode = node
  // 递归向上检查所有父节点
  while (currentNode.parent) {
    const parent = currentNode.parent
    // 检查当前父节点的所有子节点是否都被选中
    const checkedCount = parent.children.filter(child =>
      checkedKeys.value.has(child.key)
    ).length
    // 1. 所有子节点都选中，父节点选中
    if (checkedCount === parent.children.length) {
      checkedKeys.value.add(parent.key)
    }
    // 2. 部分子节点选中，父节点indeterminate
    else if (checkedCount > 0) {
      // 这里不需要操作checkedKeys，indeterminate状态由计算属性决定
    }
    // 3. 没有子节点选中，父节点取消选中
    else {
      checkedKeys.value.delete(parent.key)
    }
    currentNode = parent
  }
}

// node的选中状态改变时触发
const handleCheckedChange = (checked: boolean, node: TreeNode) => {
  // 创建一个新的Set对象，而不是直接修改原对象,不然watch不会触发
  const newCheckedKeys = new Set([...checkedKeys.value])
  function addOrDelete(type: 'add' | 'delete', _node: TreeNode) {
    if (type === 'add') {
      newCheckedKeys.add(_node.key)
    } else {
      newCheckedKeys.delete(_node.key)
    }
  }
  const type = checked ? 'add' : 'delete'
  addOrDelete(type, node)
  // 如果有子节点
  const nodes = node.children
  const stack: TreeNode[] = []
  for (let i = nodes.length - 1; i >= 0; i--) {
    stack.push(nodes[i])
  }
  while (stack.length > 0) {
    const currentNode = stack.pop()!
    addOrDelete(type, currentNode)
    if (currentNode.children.length > 0) {
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i])
      }
    }
  }
  // 通过赋值新的Set对象触发响应式更新
  checkedKeys.value = newCheckedKeys
  checkParentNodeStatus(node)
}

// 判断是否展开
function isExpanded(node: TreeNode): boolean {
  return expandedKeys.value.has(node.key)
}

// 折叠功能
function collapse(node: TreeNode) {
  expandedKeys.value.delete(node.key)
}

//展开功能
function expand(node: TreeNode) {
  expandedKeys.value.add(node.key)
}

// 切换展开
function toggleExpand(node: TreeNode) {
  if (expandedKeys.value.has(node.key)) {
    collapse(node)
  } else {
    expand(node)
  }
}

provide(treeContextKey, {
  expandedKeys,
  checkedKeys,
  checkable: props.checkable
})
</script>
