export const addClass = (el: Element, classNames: string) => {
  el.classList.add(...classNameToArray(classNames))
}

export const removeClass = (el: Element, classNames: string) => {
  el.classList.remove(...classNameToArray(classNames))
}

export const classNameToArray = (className = '') =>
  className.split(' ').filter(item => item.trim())
