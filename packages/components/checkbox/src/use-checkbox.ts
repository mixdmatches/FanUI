import type { CheckboxEmits, CheckboxProps } from './checkbox'
import {
  type ComponentInternalInstance,
  computed,
  inject,
  type SetupContext,
  watch
} from 'vue'
import { checkboxGroupContextKey } from './checkbox-group'
import { isArray, isBoolean } from '@fan-ui/utils/types'
import { formItemContextKey } from '../../form/src/form-item'
import { debugWarn } from '@fan-ui/constans'

export const useCheckbox = (
  props: CheckboxProps,
  emit: SetupContext<CheckboxEmits>['emit'],
  slots: ComponentInternalInstance['slots']
) => {
  // 注入form-item上下文
  const formItemContext = inject(formItemContextKey, undefined)

  // 注入checkbox-group的值
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => !!checkboxGroup)

  watch(
    () => props.modelValue,
    () => {
      formItemContext?.validate('change').catch(err => debugWarn(err))
    }
  )

  // 如果是group模式，需要返回checkboxGroup的modelValue，否则返回props.modelValue
  const model = computed({
    get() {
      return isGroup.value ? checkboxGroup?.modelValue?.value : props.modelValue
    },
    set(val) {
      if (isGroup.value && isArray(val)) {
        checkboxGroup?.changeEvent?.(val)
      } else {
        emit('update:modelValue', val)
      }
    }
  })

  // 处理不同绑定值的选中状态
  const isChecked = computed(() => {
    // 如果是indeterminate状态，直接返回false
    if (props.indeterminate) {
      return false
    }
    const value = model.value
    const checked = props.checked
    if (checked) {
      return checked
    }
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      return value.includes(props.label) || value.includes(props.value)
    } else {
      return !!value
    }
  })

  // 处理禁用状态
  const isDisabled = computed(() =>
    checkboxGroup?.disabled ? checkboxGroup.disabled : props.disabled
  )

  // 没传label也没有默认插槽
  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('change', target.checked)
    // 新增：触发 form-item 校验
    formItemContext?.validate('change').catch(err => debugWarn(err))
  }

  // 计算大小，优先级：组件props > 组件group的size > 组件的默认size
  const size = computed(() => {
    return props.size || checkboxGroup?.size || 'default'
  })

  return {
    checkboxGroup,
    isGroup,
    model,
    isChecked,
    isDisabled,
    hasOwnLabel,
    handleChange,
    size
  }
}
