import { ref, watch } from 'vue'
import { TreeNode } from '../types'

export const useExpanded = (props, { emit }) => {
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
  return {
    toggleExpand,
    isExpanded,
    expandedKeys
  }
}
