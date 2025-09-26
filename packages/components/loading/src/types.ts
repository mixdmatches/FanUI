import type { MaybeRef } from 'vue'
import type { LoadingInstance } from './loading'

export type LoadingOptionsResolved = {
  text: MaybeRef<string>
  svgViewBox: MaybeRef<string>
  spinner: MaybeRef<boolean | string>
  svg: MaybeRef<string>
  background: MaybeRef<string>
  fullscreen: boolean
  lock: boolean
  /**
   * @description v-show使用
   */
  visible: boolean
  /**
   * @description 父级元素
   */
  parent: HTMLElement
  /**
   * @description 目标元素
   */
  target: HTMLElement
  closed?: () => void
}

export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    /**
     * @description 目标元素，如果传string，就用document.querySelector获取
     */
    target: HTMLElement | string
  }
>

export const INSTANCE_KEY = Symbol('FLoading')

export interface FLoading extends HTMLElement {
  [INSTANCE_KEY]: {
    options: LoadingOptions
    instance: LoadingInstance
  }
}
