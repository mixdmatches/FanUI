import { DefineComponent, ExtractPropTypes, PropType } from 'vue'

export const virtualProps = {
  /**
   * description: 数据源列表
   */
  dataSources: {
    type: Array,
    required: true,
    default: () => []
  },
  /**
   * description: 数据源的唯一标识
   */
  dataKey: {
    type: String,
    required: true
  },
  /**
   * description: 默认显示的个数
   */
  keeps: {
    type: Number,
    default: 30
  },
  /**
   * description: 大约的高度
   */
  estimateSize: {
    type: Number,
    default: 80
  },
  /**
   * description: 用户选择的组件
   */
  dataComponent: {
    type: [Object, Function] as PropType<DefineComponent>,
    required: true
  }
} as const

export type VirtualProps = ExtractPropTypes<typeof virtualProps>

export const virtualItemProps = {
  /**
   * description: 数据源
   */
  dataSource: {
    type: Object,
    required: true
  },
  /**
   * description: 数据源的唯一标识
   */
  uniqueKey: {
    type: [String, Number] as PropType<string | number>
  },
  /**
   * description: 用户选择的组件
   */
  component: {
    type: [Object, Function] as PropType<DefineComponent>
  }
}

export type VirtaulItemProps = ExtractPropTypes<typeof virtualItemProps>
