import { ref, watch } from 'vue'
import { Key, TreeNode } from '../types'

export const useChecked = (props, { emit, tree }) => {
  // 受控选中checked
  const checkedKeys = ref<Set<Key>>(new Set(props.checkedKeys))

  watch(
    () => checkedKeys.value,
    newVal => {
      emit('update:checkedKeys', [...newVal])
    }
  )

  // 初始化checkedKeys
  const initCheckedKeys = () => {
    if (!tree.value || props.checkedKeys.length === 0) return

    const newCheckedKeys = new Set<Key>()
    for (const key of props.checkedKeys) {
      const node = getChildNodeByKey(key)
      if (node) {
        // 找到匹配的节点，收集该节点及其所有子节点的key
        const allKeys = collectAllChild(node).keys()
        allKeys.forEach(key => newCheckedKeys.add(key))
      }
    }

    // 更新checkedKeys
    checkedKeys.value = newCheckedKeys
    // 遍历每个节点，更新indeterminate状态
    for (const key of props.checkedKeys) {
      const node = getChildNodeByKey(key)
      if (node) {
        checkParentNodeStatus(node)
      }
    }
  }

  /**
   * 递归收集节点及其所有子节点
   * @param node 节点
   * @returns 所有子节点的Map
   */
  function collectAllChild(node: TreeNode) {
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
  function getChildNodeByKey(key: Key): TreeNode | null {
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

  /**
   * 检查父节点状态
   * @param node 节点
   */
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
        parent.indeterminate = false
        checkedKeys.value.add(parent.key)
      }
      // 2. 部分子节点选中，父节点indeterminate
      else if (checkedCount > 0) {
        parent.indeterminate = true
        checkedKeys.value.delete(parent.key)
      }
      // 3. 没有子节点选中，父节点取消选中
      else {
        parent.indeterminate = parent.children.some(child => {
          return child.indeterminate
        })
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

    if (type === 'add') {
      node.indeterminate = false
    }

    const childKeys = collectAllChild(node).keys()
    for (const key of childKeys) {
      addOrDelete(type, key)
    }
    // 通过赋值新的Set对象触发响应式更新
    checkedKeys.value = newCheckedKeys
    checkParentNodeStatus(node)
  }

  initCheckedKeys()

  return {
    checkedKeys,
    handleCheckedChange,
    getChildNodeByKey,
    collectAllChild,
    checkParentNodeStatus
  }
}
