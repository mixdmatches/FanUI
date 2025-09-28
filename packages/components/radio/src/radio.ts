import type { ExtractPropTypes, PropType } from 'vue'
import { isString, isNumber, isBoolean } from '@fan-ui/utils/types'
import {
  CHANGE_EVENT,
  componentSizes,
  UPDATE_MODEL_EVENT
} from '@fan-ui/constans'

export type RadioValueType = string | number | boolean

export const radioProps = {
  /** @description 选中绑定的值 */
  modelValue: [String, Number, Boolean] as PropType<RadioValueType>,
  /** @description 单选框的值 */
  value: [String, Number, Boolean] as PropType<RadioValueType>,
  /** @description value没有值时用label */
  label: [String, Number, Boolean] as PropType<RadioValueType>,
  /** @description 原生name值 */
  name: String,
  /** @description 大小 */
  size: {
    type: String,
    values: componentSizes,
    required: false
  },
  /** @description 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  }
}

export const radioEmits = {
  /** @description 绑定值变化时触发 */
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  /** @description 选中时触发 */
  [CHANGE_EVENT]: (val: string | number | boolean | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = typeof radioEmits
