import typescript from '@rollup/plugin-typescript'
import vue from 'rollup-plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { readdirSync } from 'fs'
import { join } from 'path'

const componentsDir = './packages/components'
const components = readdirSync(componentsDir)
  .filter(item => !item.startsWith('.'))
  .map(item => join(componentsDir, item, 'index.ts'))

export default [
  // 全量加载配置
  {
    input: './packages/components/index.ts',
    output: [
      {
        name: 'libName',
        file: './lib/index.js',
        format: 'umd',
        sourcemap: false,
        globals: {
          vue: 'Vue'
        }
      },
      {
        name: 'libName',
        file: './lib/index.module.js',
        format: 'es',
        sourcemap: false,
        globals: {
          vue: 'Vue'
        }
      }
    ],
    plugins: [
      typescript(),
      vue({
        // 支持 TypeScript
        script: {
          lang: 'ts'
        },
        // 支持 <script setup>
        template: {
          isProduction: true
        },
        preprocessStyles: true
      }),
      vueJSX(),
      dts({
        entryRoot: './packages/components',
        outDir: './lib',
        tsconfigPath: './tsconfig.json'
      })
    ],
    external: ['vue']
  },
  // 按需加载配置
  {
    input: components,
    output: {
      dir: './lib',
      format: 'es',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'packages/components'
    },
    plugins: [
      typescript(),
      vue({
        script: {
          lang: 'ts'
        },
        template: {
          isProduction: true
        },
        preprocessStyles: true
      }),
      vueJSX(),
      dts({
        entryRoot: './packages/components',
        outDir: './lib',
        tsconfigPath: './tsconfig.json'
      })
    ],
    external: ['vue']
  }
]
