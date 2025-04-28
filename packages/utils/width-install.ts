import { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function widthInstall<T extends { name?: string }>(comp: T) {
  console.log(comp,'comp');
  const install = (app: App) => {
    if (comp.name) {
      app.component(comp.name, comp)
    }
  }

  return Object.assign(comp, { install }) as SFCWithInstall<T>
}
