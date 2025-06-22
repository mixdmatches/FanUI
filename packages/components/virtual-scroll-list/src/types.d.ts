export type RangeOption = {
  start: number
  end: number
  padFront?: number
  padBehind?: number
}

export type VirtualOptions = {
  keeps: number
  buffer: number
  estimateSize: number
  uniqueIds: string[]
}

export type UpdateType = (newRange: RangeOption) => void
