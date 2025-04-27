import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const componentsDir = path.resolve(__dirname, 'packages/components')
const components = fs
  .readdirSync(componentsDir)
  .filter(name => fs.statSync(path.join(componentsDir, name)).isDirectory())

const input = {
  components: path.resolve(componentsDir, 'components.ts'), // 全量入口
  ...Object.fromEntries(
    components.map(name => [name, path.resolve(componentsDir, name, 'index.ts')])
  )
}

export default defineConfig({
  input,
  output: [
    {
      dir: 'dist/es',
      format: 'es',
      entryFileNames: '[name]/index.js',
      preserveModules: true,
      exports: 'named'
    },
    {
      dir: 'dist/lib',
      format: 'cjs',
      entryFileNames: '[name]/index.js',
      preserveModules: true,
      exports: 'named'
    }
  ],
  plugins: [
    vue(),
    postcss(),
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
    commonjs(),
    terser()
  ],
  external: ['vue']
})
