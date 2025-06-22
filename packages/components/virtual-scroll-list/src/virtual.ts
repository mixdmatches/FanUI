import { RangeOption, UpdateType, VirtualOptions } from './types'

export function initVirtual(param: VirtualOptions, update: UpdateType) {
  const range: RangeOption = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  }
  function getPadFront() {
    return param.estimateSize * range.start
  }
  function getPadBehind() {
    const lastIndex = param.uniqueIds.length - 1
    return (lastIndex - range.end) * param.estimateSize
  }
  function updateRange(start: number, end: number) {
    range.start = start
    range.end = end
    range.padFront = getPadFront()
    range.padBehind = getPadBehind()
    update({ ...range })
  }
  function checkRange(start: number, end: number) {
    const total = param.uniqueIds.length
    const keeps = param.keeps
    if (total < keeps) {
      start = 0
      end = total - 1
      // 最后滑到了100条 71-100
      // start = 90 - end = 100
    } else if (end - start < keeps - 1) {
      start = end - keeps + 1
    }
    updateRange(start, end)
  }
  checkRange(0, param.keeps - 1)
  return { checkRange }
}
