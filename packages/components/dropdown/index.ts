import { withInstall } from '@fan-ui/utils/with-install'
import _Dropdown from './src/dropdown.vue'
import _DropdownMenu from './src/dropdownMenu.vue'
import _DropdownItem from './src/dropdownItem.vue'

const FDropdown = withInstall(_Dropdown)
const FDropdownMenu = withInstall(_DropdownMenu)
const FDropdownItem = withInstall(_DropdownItem)

declare module 'vue' {
  export interface GlobalComponents {
    FDropdown: typeof FDropdown
    FDropdownMenu: typeof FDropdownMenu
    FDropdownItem: typeof FDropdownItem
  }
}

export * from './src/dropdown'
export { FDropdown, FDropdownMenu, FDropdownItem }
