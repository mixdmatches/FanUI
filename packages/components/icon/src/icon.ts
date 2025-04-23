// 准备组件相关属性和ts类型
import { ExtractPropTypes, PropType } from 'vue'
// ExtractPropTypes 从组件的 props 选项中提取出 props 的类型
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string> // 类型断言，告诉ts类型是number或string,
} as const // 只读

export type IconProps = ExtractPropTypes<typeof iconProps> // 提取出的类型
