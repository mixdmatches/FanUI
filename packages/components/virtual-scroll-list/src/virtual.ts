import { min } from 'lodash-unified'
import { RangeOption, UpdateType, VirtualOptions } from './types'

const enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC'
}

export function initVirtual(param: VirtualOptions, update: UpdateType) {
  let offsetValue = 0
  let calType = CALC_TYPE.INIT
  let fixedSizeVal = 0
  let firstRangAvg = 0
  const sizes = new Map<string | number, number>()
  const range: RangeOption = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  }
  function isFixed() {
    return calType === CALC_TYPE.FIXED
  }
  function getEstimateSize() {
    // 优化平均值
    return isFixed() ? fixedSizeVal : firstRangAvg || param.estimateSize
  }
  function getIndexOffset(idx: number) {
    if (!idx) return 0
    let offset = 0
    for (let i = 0; i < idx; i++) {
      const indexSize = sizes.get(param.uniqueIds[i])
      offset += typeof indexSize === 'number' ? indexSize : getEstimateSize()
    }
    return offset
  }
  function getPadFront() {
    // 准确计算上偏移量
    if (isFixed()) {
      return fixedSizeVal * range.start
    } else {
      // 将滚动后的元素累加一遍，计算上高度
      return getIndexOffset(range.start)
    }
  }
  function getPadBehind() {
    const lastIndex = param.uniqueIds.length - 1
    return (lastIndex - range.end) * getEstimateSize()
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
  // 获取滑动的个数
  function getScrollOvers() {
    // 根据划过的偏移量 / 每项高度 = 划过的高度
    // getEstimateSize()这个值是预估，要精确的找到滚动了多少个
    if (isFixed()) {
      return Math.floor(offsetValue / getEstimateSize())
    } else {
      // 获取最接近的滚动那一项，计算每一项的偏移量，看与哪一项最接近
      // [10,30,50,200,900,1200] -> 1100
      let low = 0
      let high = param.uniqueIds.length - 1
      let middle = 0
      let middleOffset = 0
      while (low <= high) {
        middle = low + Math.floor((high - low) / 2)
        middleOffset = getIndexOffset(middle)
        if (middleOffset == offsetValue) {
          return middle
        } else if (middleOffset < offsetValue) {
          low = middle + 1
        } else if (middleOffset > offsetValue) {
          high = middle - 1
        }
      }
      return low > 0 ? --low : 0
    }
  }
  // 通过start获取end
  function getEndByStart(start: number) {
    const computedEnd = start + param.keeps - 1
    const end = Math.min(computedEnd, param.uniqueIds.length - 1)
    return end
  }
  function handleFront() {
    // 核心就是向上滑动要不要更新start
    // 获取划过了多少个
    const overs = getScrollOvers()
    if (overs > range.start) {
      // 假如开始是0，划到了1，start 不用变
      return
    }
    // 假如划过了8个，但是开始是5,缓存区是10
    const start = Math.max(overs - param.buffer, 0)
    checkRange(start, getEndByStart(start))
  }
  function handleBehind() {
    const overs = getScrollOvers()
    if (overs < range.start + param.buffer) {
      // 向下滚动时看一下是否在缓存区
      return
    }
    checkRange(overs, getEndByStart(overs))
  }
  function handleScroll(offset: number) {
    // 先看一下向上滚动还是向下滚动
    const direction = offset < offsetValue ? 'FRONT' : 'BEHIND'
    offsetValue = offset
    // 如果是向上滚动
    if (direction === 'FRONT') {
      handleFront()
    } else if (direction === 'BEHIND') {
      handleBehind()
    }
  }
  function saveSize(id: number | string, size: number) {
    sizes.set(id, size)
    // 第一个元素加载完毕后默认为固定高度
    if (calType === CALC_TYPE.INIT) {
      fixedSizeVal = size
    } else if (calType === CALC_TYPE.FIXED && fixedSizeVal !== size) {
      calType = CALC_TYPE.DYNAMIC
      fixedSizeVal = 0 // 默认采用estimateSize
    }
    // 尽可能不要用 estiamteSize来进行操作
    // 有固定高度，动态高度
    if (calType === CALC_TYPE.DYNAMIC) {
      if (sizes.size < Math.min(param.keeps, param.uniqueIds.length)) {
        const totalHeight = [...sizes.values()].reduce(
          (acc, val) => acc + val,
          0
        )
        firstRangAvg = Math.round(totalHeight / sizes.size)
      }
    }
  }
  checkRange(0, param.keeps - 1)
  return { handleScroll, saveSize }
}
