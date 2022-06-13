import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  hostname: 'http://monkee.online',

  // author: false,

  // 纯净模式
  pure: true,

  iconPrefix: 'iconfont icon-',

  repo: 'https://github.com/Nevermore98/Nevermore98.github.io',

  docsDir: 'docs',

  // navbar
  navbar: navbar,
  logo: '/favicon.svg',

  // sidebar
  sidebar: sidebar,

  sidebarIcon: false,

  displayFooter: true,
  footer: 'MIT Licensed | Copyright © 2022-present Nevermore阳',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  // 是否在页面标题旁显示图标
  titleIcon: false,

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
    },
  },

  blog: {
    name: 'Nevermore阳',
    avatar: '/avatar.jpg',
    roundAvatar: true,
    description: '深自缄默，如云漂泊',

    intro: '/about/',
    medias: {
      Gmail: 'mailto:nevermorey98@gmail.com',
      GitHub: 'https://github.com/Nevermore98',
      Gitee: 'https://gitee.com/Nevermore98',
    },
    sidebarDisplay: 'none',
  },

  plugins: {
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
    blog: true,
  },
})
