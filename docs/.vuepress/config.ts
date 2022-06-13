import { defineUserConfig } from 'vuepress'
import theme from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Nevermore阳 的学习笔记',
  description: `Nevermore阳's noteBook`,

  base: '/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3394549_5tfd2sq71j8.css',
      },
    ],
    // 自定义脚本
    [
      'script',
      {
        type: 'text/javascript',
        src: '/custom.js',
      },
    ],
    // 自定义 favicon
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  theme,
})
