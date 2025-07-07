import { provide, ref, SetupContext, watch } from 'vue'
import { CollapseEmits, CollapseProps } from './collapse'
import { castArray } from 'lodash-unified'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@fan-ui/constans'
import { CollapseActiveName } from './types'
import { collapseContextKey } from './constants'

export const useCollapse = (
  props: CollapseProps,
  emit: SetupContext<CollapseEmits>['emit']
) => {
  // castArray确保是个数组
  const activeNames = ref(castArray(props.modelValue))

  const setActiveNames = (_activeNames: CollapseActiveName[]) => {
    activeNames.value = _activeNames
    const value = props.accordion ? _activeNames[0] : _activeNames
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  const handleItemClick = (name: CollapseActiveName) => {
    // 如果是手风琴模式
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? '' : name])
    } else {
      const _activeNames = activeNames.value
      const index = _activeNames.indexOf(name)

      // 如果找到了说明是展开状态要闭合，没找到就是闭合状态要展开
      if (index > -1) {
        _activeNames.splice(index, 1)
      } else {
        _activeNames.push(name)
      }
      setActiveNames(_activeNames)
    }
  }

  watch(
    () => props.modelValue,
    () => {
      activeNames.value = castArray(props.modelValue)
    },
    { deep: true }
  )

  provide(collapseContextKey, { activeNames, handleItemClick })

  return { activeNames, setActiveNames }
}
