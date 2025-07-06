import { ExtractPropTypes, PropType } from 'vue'
import { CollapseModuleValue } from './types'
import { isArray, isString } from '@fan-ui/utils'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@fan-ui/constans'
import { isNumber } from 'lodash-unified'

export const collapseProps = {
  modelValue: {
    type: [Array, String, Number] as PropType<CollapseModuleValue>,
    default: () => []
  },
  accordion: {
    type: Boolean,
    default: false
  },
  activeNames: {
    type: [Array, String] as PropType<string[] | string>,
    default: () => []
  }
}

export const emitChangeFn = (val: CollapseModuleValue) =>
  isNumber(val) || isString(val) || isArray(val)

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
}

export type CollapseProps = Partial<ExtractPropTypes<typeof collapseProps>>

export type CollapseEmits = typeof collapseEmits
