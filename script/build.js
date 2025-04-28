import { fileURLToPath } from 'url'
import path from "path"
import fs from "fs-extra"
import { defineConfig, build } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJSX from "@vitejs/plugin-vue-jsx"
import dts from 'vite-plugin-dts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 组件库全局入口
const compontsDir = path.resolve(__dirname, "../packages/components")
// 输出目录
const outputDir = path.resolve(__dirname, "../build")
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json') // 指定 tsconfig 路径

// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue(), vueJSX(), dts({
      entryRoot: compontsDir, // 入口目录
      outDir: outputDir,      // 输出目录
      tsconfigPath: tsconfigPath,
      rollupTypes: true,
    })]
})

const rollupOptions = defineConfig({
  // that shouldn't be bundled
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
})

// 生成 package.json
const createPackageJson = () => {
  const fileStr = `{
    "name": "fan-ui",
    "version": "1.0.0",
    "description": "Vue3组件库",
    "main": "fan-ui.umd.js",
    "module": "fan-ui.mjs",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/GGXXMM/vue3-ui.git"
    },
    "keywords": ["vue3", "组件库", "UI"],
    "author": "陈下饭",
    "license": "ISC"
  }
  `
  const filePath = path.resolve(outputDir, `package.json`)
  fs.outputFile(filePath, fileStr, "utf-8")
}

/** 单组件按需构建 */
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(compontsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"]
        },
        rollupOptions,
        outDir: path.resolve(outputDir, name)
      }
    })
  )
}

/** 全量构建 */
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: compontsDir,
          name: "index",
          fileName: "index",
          formats: ["es", "umd","cjs"]
        },
        rollupOptions,
        outDir: outputDir
      }
    })
  )

  createPackageJson()
}

const buildLib = async () => {
  await buildAll()

  // 按需打包
  fs.readdirSync(compontsDir)
    .filter(name => {
      // 获取组件的目录
      const componentDir = path.resolve(compontsDir, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return isDir && fs.readdirSync(componentDir).includes("index.ts")
    })
    .forEach(async name => {
      await buildSingle(name)
    })
}

buildLib()