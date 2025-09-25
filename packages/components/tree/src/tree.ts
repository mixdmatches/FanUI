import { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import {
  TreeOption,
  Key,
  DropTreeOption,
  NodeDropType,
  DragTreeNode
} from './types'

export const treeProps = {
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  expandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  checkedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  checkable: {
    type: Boolean,
    default: false
  },
  onLoad: Function as PropType<(node: TreeOption) => Promise<TreeOption[]>>,
  height: Number,
  draggable: {
    type: Boolean,
    default: false
  }
} as const

export const treeEvent = {
  'update:expandedKeys': (_keys: Key[]) => _keys,
  'update:checkedKeys': (_keys: Key[]) => _keys
}
// 定义一个新的类型来匹配实际使用的 ref 类型
export interface TreeContext {
  checkedKeys: Ref<Set<Key>>
  checkable: boolean
}
export interface DragState {
  allowDrop: boolean
  dropType: NodeDropType | null
  draggingNode: DragTreeNode | null
  showDropIndicator: boolean
  dropNode: DragTreeNode | null
}
export interface DragNodeContext {
  dragState: DragState
  treeNodeDragStart: (options: DropTreeOption) => void
  treeNodeDragOver: (options: DropTreeOption) => void
  treeNodeDragEnd: (options: DropTreeOption) => void
}

export const treeContextKey: InjectionKey<TreeContext> = Symbol('treeContext')
export const dragNodeKey: InjectionKey<DragNodeContext> = Symbol('dragNodeKey')

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeEvent = typeof treeEvent
