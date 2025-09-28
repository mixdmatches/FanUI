import { ref, watch } from 'vue'
import type { TreeNode, Key } from '../types'

export const useExpanded = (props, { emit, createTree }) => {
  // 需要展开的key
  const expandedKeys = ref(new Set(props.expandedKeys))

  watch(
    () => expandedKeys.value,
    newVal => {
      emit('update:expandedKeys', [...newVal])
    }
  )
  // 判断是否展开
  function isExpanded(node: TreeNode): boolean {
    return expandedKeys.value.has(node.key)
  }

  // 折叠功能
  function collapse(node: TreeNode) {
    expandedKeys.value.delete(node.key)
  }

  const loadingKeysRef = ref(new Set<Key>())

  function triggerLoading(node: TreeNode) {
    if (!node.children.length && !node.isLeaf) {
      const loadingKeys = loadingKeysRef.value
      if (!loadingKeys.has(node.key)) {
        loadingKeys.add(node.key)
        const onLoad = props.onLoad
        if (onLoad) {
          onLoad(node.rawNode).then(children => {
            node.rawNode.children = children
            node.children = createTree(children, node)
            loadingKeys.delete(node.key)
          })
        }
      }
    }
  }

  //展开功能
  function expand(node: TreeNode) {
    expandedKeys.value.add(node.key)
    triggerLoading(node)
  }

  // 切换展开
  function toggleExpand(node: TreeNode) {
    if (
      expandedKeys.value.has(node.key) &&
      !loadingKeysRef.value.has(node.key)
    ) {
      collapse(node)
    } else {
      expand(node)
    }
  }
  return {
    toggleExpand,
    isExpanded,
    expandedKeys,
    loadingKeysRef
  }
}
