import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import {
  componentPreview,
  containerPreview
} from '@vitepress-demo-preview/plugin'
export default {
  base: '/FanUI/',
  title: 'fan-ui',
  description: 'fan-ui',
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  themeConfig: {
    logo: '../public/logo.png',
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/mixdmatches/FanUI',
        activeMatch: ''
      },
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/components/icon', activeMatch: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickStart' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Basic基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'WaterMark 水印', link: '/components/watermark' }
          ]
        },
        {
          text: 'Form表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'checkbox 复选框', link: '/components/checkbox' },
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Upload 上传', link: '/components/upload' },
            { text: 'Radio 单选框', link: '/components/radio' }
          ]
        },
        {
          text: 'Data数据展示',
          items: [
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'card 卡片', link: '/components/card' },
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Tree 树组件', link: '/components/tree' },
            {
              text: 'VirtualScrollList 虚拟滚动列表',
              link: '/components/virtual-list'
            }
          ]
        },
        {
          text: 'Navigation 导航',
          items: [
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'Pagination 分页器', link: '/components/pagination' }
          ]
        },
        {
          text: 'Feedback反馈组件',
          items: [
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Loading 加载中', link: '/components/loading' },
            { text: 'Tooltip 提示框', link: '/components/tooltip' }
          ]
        },
        {
          text: 'AI应用组件',
          items: [{ text: 'Bubble 气泡', link: '/components/bubble' }]
        }
      ]
    }
  }
}
