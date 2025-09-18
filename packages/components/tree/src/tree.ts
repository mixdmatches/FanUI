import { ExtractPropTypes, InjectionKey, PropType, Reactive, Ref } from 'vue'
import { TreeOption } from './types'

type Key = string | number

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
  }
} as const

export const treeEvent = {
  'update:expandedKeys': (_keys: Key[]) => _keys,
  'update:checkedKeys': (_keys: Key[]) => _keys
}
// 定义一个新的类型来匹配实际使用的 ref 类型
export interface TreeContext {
  expandedKeys: Ref<Set<Key>>
  checkedKeys: Ref<Set<Key>>
  checkable: boolean
}

export const treeContextKey: InjectionKey<TreeContext> = Symbol('treeContext')

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>
export type TreeEvent = typeof treeEvent
