import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'es',
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue'],
      input: path.resolve(__dirname, 'index.ts'),
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          preserveModulesRoot: 'packages/components',
          exports: 'named',
          dir: '../fanui/es'
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'packages/components',
          exports: 'named',
          dir: '../fanui/lib'
        }
      ]
    },
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => `index.${format === 'es' ? 'mjs' : 'js'}`
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-')
        }
      }
    }),
    dts({
      entryRoot: './',
      outDir: ['../fanui/es', '../fanui/lib'],
      tsconfigPath: '../../tsconfig.json',
      include: ['./components/**/*.ts', './components/**/*.vue', './index.ts'],
      exclude: ['node_modules', 'dist'],
      copyDtsFiles: true,
      insertTypesEntry: true,
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        noEmit: false
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
