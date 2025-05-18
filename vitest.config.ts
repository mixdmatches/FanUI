import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    testTransformMode: {
      web: ['.tsx', '.jsx']
    },
    // 指定测试文件范围
    include: [
      'packages/components/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ],
    // 覆盖率配置
    coverage: {
      // 启用覆盖率收集
      enabled: true,
      // 指定覆盖率收集器
      provider: 'v8',
      // 生成多种格式的覆盖率报告
      reporter: ['html']
    }
  }
})
