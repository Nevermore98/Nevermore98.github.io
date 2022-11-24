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
      '/resume': ['9810']
    }
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
      Gitee: 'https://gitee.com/Nevermore98'
    },
    sidebarDisplay: 'none'
  },

  plugins: {
    mdEnhance: {
      // enableAll: true,
      demo: true,
      mark: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    },
    // 开启 pdf 插件
    components: ['PDF'],
    blog: true,

    pwa: {
      update: 'hint',
      favicon: '/favicon.svg',
      themeColor: '#46bd87',
      cacheHTML: false,
      maxSize: 3072,
      // apple: false,
      apple: {
        icon: '/apple-touch-icon.png',
        statusBarColor: 'white'
      },
      // msTile: false,
      msTile: {
        image: '/mstile-144x144.png',
        color: '#ffffff'
      },
      manifest: {
        name: 'Nevermore阳 的学习笔记',
        short_name: `Nevermore阳's noteBook`,
        description: `Nevermore阳's noteBook`,
        theme_color: '#46bd87',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  }
})
