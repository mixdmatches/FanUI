import { ExtractPropTypes, PropType } from 'vue'
import { Arrayable } from '@fan-ui/utils'

export type Font = {
  color: string
  fontSize: number
  fontWeight: 'normal' | 'light' | 'weight' | number
  fontFamily: string
}

export const watermarkProps = {
  width: { type: Number, default: 50 },
  height: { type: Number, default: 50 },
  containerRotate: { type: Number, default: 0 },
  textRotate: { type: Number, default: -22 },
  zIndex: { type: String, default: '9' },
  content: {
    type: Object as PropType<Arrayable<string>>,
    default: ''
  },
  font: {
    type: Object as PropType<Font>,
    default: () => ({
      color: 'rgba(0,0,0,.15)',
      fontSize: 16,
      fontWeight: 'normal',
      fontFamily: 'sans-serif'
    })
  },
  gap: { type: Object as PropType<[number, number]>, default: [100, 100] }
}

export type WatermarkProps = ExtractPropTypes<typeof watermarkProps>
