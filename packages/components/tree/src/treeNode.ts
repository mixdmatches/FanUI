import type { ExtractPropTypes, PropType } from 'vue'
import type { Key, TreeNode } from './types'

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    default: () => {}
  },
  expanded: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    default: () => new Set()
  },
  draggable: {
    type: Boolean,
    default: false
  }
} as const

export const treeNodeEmit = {
  toggle: (node: TreeNode) => node,
  checkedChange: (checked: boolean, node: TreeNode) => node
}

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>
