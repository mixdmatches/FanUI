import { computed } from 'vue'
import { WatermarkProps } from './water-mark'
import { Arrayable } from '@fan-ui/utils'

export default function useWatermarkBg(props: WatermarkProps) {
  return computed(() => {
    // 创建canvas元素
    const canvas = document.createElement('canvas')
    // 获取设备像素比
    const devicePixelRatio = window.devicePixelRatio || 1

    const fontSize = props.font?.fontSize * devicePixelRatio
    const font = `${props.font?.fontWeight} ${fontSize}px ${props.font?.fontFamily || 'serif'}`
    // 获取canvas上下文
    const ctx = canvas.getContext('2d')

    if (!ctx) return

    ctx.font = font
    const maxWidth = props.width * devicePixelRatio // 最大允许宽度（基于 props.width）
    const lineHeight = fontSize * 1.2 // 行高（可调整，此处为字号的 1.2 倍）

    const textLines: Arrayable<string> = []

    if (typeof props.content === 'string') {
      textLines.push(props.content)
    } else {
      textLines.push(...props.content)
    }

    const lineCount = textLines.length
    const totalTextHeight = lineCount * lineHeight // 多行文本总高度

    const canvasWidth = maxWidth + props.gap[0] * devicePixelRatio
    const canvasHeight = totalTextHeight + props.gap[1] * devicePixelRatio
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.translate(canvas.width / 2, canvas.height / 2) // 居中定位
    ctx.rotate((Math.PI / 180) * props.textRotate)
    ctx.fillStyle = props.font?.color
    ctx.font = font
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    textLines.forEach((line, index) => {
      const y = -totalTextHeight / 2 + index * lineHeight + lineHeight / 2
      ctx.fillText(line, 0, y)
    })

    return {
      base64: canvas.toDataURL(),
      styleWidth: canvasWidth / devicePixelRatio, // 转换为 CSS 像素宽度
      styleHeight: canvasHeight / devicePixelRatio // 转换为 CSS 像素高度
    }
  })
}
