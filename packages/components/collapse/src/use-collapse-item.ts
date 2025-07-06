import { computed, inject, unref } from 'vue'
import { collapseContextKey } from './constants'
import { CollapseItemProps } from './collapse-item'
import { createNamespace } from '@fan-ui/utils'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapseContext = inject(collapseContextKey)
  const isActive = computed(() => {
    return collapseContext?.activeNames.value.includes(props.name!)
  })

  const handleHeadClick = () => {
    collapseContext?.handleItemClick(props.name!)
  }

  return { isActive, handleHeadClick }
}

export const useCollapseItemDom = (
  props: CollapseItemProps,
  { isActive }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const ns = createNamespace('collapse-item')
  const rootKls = computed(() => {
    return [ns.b(), ns.is('active', !!unref(isActive))]
  })
  const arrowKls = computed(() => [
    ns.e('arrow'),
    ns.is('active', !!unref(isActive))
  ])
  return { rootKls, arrowKls }
}
