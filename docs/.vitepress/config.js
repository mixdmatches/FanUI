import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
export default {
  base: '/FanUI/',
  title: 'Fan-ui',
  description: 'Fan-ui',
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
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
            { text: 'Icon', link: '/components/icon' },
            {
              text: 'Button',
              link: '/components/button'
            }
          ]
        },
        {
          text: 'Form表单组件',
          items: [
            { text: 'Input', link: '/components/input' },
            { text: 'checkbox', link: '/components/checkbox' },
            { text: 'Form', link: '/components/form' },
            { text: 'Upload', link: '/components/upload' },
            { text: 'Radio', link: '/components/radio' }
          ]
        },
        {
          text: '反馈组件',
          items: [{ text: 'Message', link: '/components/message' }]
        }
      ]
    }
  }
}
