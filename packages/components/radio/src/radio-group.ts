import { ExtractPropTypes, PropType } from 'vue'
import { RadioValueType } from './radio'
import { isBoolean, isNumber, isString } from '@fan-ui/utils/types'
import { componentSizes, UPDATE_MODEL_EVENT } from '@fan-ui/constans'

export const radioGroupProps = {
  /** @description 原生id属性 */
  id: String,
  /** @description 绑定的值 */
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
    default: undefined
  },
  /** @description 原生name属性 */
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

export const radioGroupEmits = {
  /** @description 绑定值变化时触发 */
  [UPDATE_MODEL_EVENT]: (val: RadioValueType | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val),
  /** @description 选中时触发 */
  change: (val: RadioValueType | undefined) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupEmits = typeof radioGroupEmits
