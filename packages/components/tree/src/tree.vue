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
import { computed, onMounted, provide, ref, watch } from 'vue'
import { treeContextKey, treeEvent, treeProps } from './tree'
import FTreeNode from './TreeNode.vue'
import { createNamespace } from '@fan-ui/utils/create'
import { Key, TreeNode, TreeOption } from './types'

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
        parent: parent ?? undefined,
        disabled: node.disabled ?? false
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

// 拍平树
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
  }
)

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
      checkedKeys.value.add(parent.key)
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
  function addOrDelete(type: 'add' | 'delete', key: Key) {
    if (type === 'add') {
      newCheckedKeys.add(key)
    } else {
      newCheckedKeys.delete(key)
    }
  }
  const type = checked ? 'add' : 'delete'

  const childKeys = collectAllChild(node).keys()
  for (const key of childKeys) {
    addOrDelete(type, key)
  }

  // 通过赋值新的Set对象触发响应式更新
  checkedKeys.value = newCheckedKeys
  checkParentNodeStatus(node)
}

// 递归收集节点及其所有子节点--map映射结果
function collectAllChild(node: TreeNode): Map<Key, TreeNode> {
  const map = new Map<Key, TreeNode>()
  map.set(node.key, node)

  function traverse(currentNode: TreeNode) {
    const children = currentNode.children || []
    for (const child of children) {
      map.set(child.key, child)
      traverse(child)
    }
  }

  traverse(node)
  return map
}

/**
 * 根据key获取节点
 * @param key 节点的key
 * @returns 节点
 */
function getNodeByKey(key: Key): TreeNode | null {
  if (!tree.value) return null
  const nodes = tree.value
  let node: TreeNode | null = null
  function traverse(nodes: TreeNode[]) {
    for (const n of nodes) {
      if (n.key === key) {
        node = n
        return
      }
      if (n.children && n.children.length > 0) {
        traverse(n.children)
      }
    }
  }
  traverse(nodes)
  return node
}

// 初始化checkedKeys，包含props.checkedKeys对应节点及其所有子节点
onMounted(() => {
  if (!tree.value || props.checkedKeys.length === 0) return

  const newCheckedKeys = new Set<Key>()
  for (const key of props.checkedKeys) {
    const node = getNodeByKey(key)
    if (node) {
      // 找到匹配的节点，收集该节点及其所有子节点的key
      const allKeys = collectAllChild(node).keys()
      allKeys.forEach(key => newCheckedKeys.add(key))
    }
  }

  // 更新checkedKeys
  checkedKeys.value = newCheckedKeys
})

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
