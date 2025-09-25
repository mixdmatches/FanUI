export type Key = string | number
export interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[]
  isLeaf?: boolean
  disabled?: boolean
  [key: string]: unknown
}

export interface TreeNode extends Required<TreeOption> {
  level: number
  rawNode: TreeOption
  children: TreeNode[]
  isLeaf: boolean
  disabled?: boolean
  checked?: boolean
  indeterminate?: boolean
  parent?: TreeNode
}

export type NodeDropType = 'before' | 'after' | 'inner' | 'none'
export interface DragTreeNode {
  $el: HTMLElement | null
  treeNode: TreeNode
}

export interface DropTreeOption {
  event: DragEvent
  node: DragTreeNode
}
