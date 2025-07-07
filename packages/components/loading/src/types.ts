import { LoadingInstance } from './loading'

export interface LoadingOptions {
  parent: HTMLElement
}

export const INSTANCE_KEY = Symbol('FLoading')

export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]: {
    options: LoadingOptions
    instance: LoadingInstance
  }
}
