import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  {
    text: '前端开发',
    activeMatch: '^/front-end/$',
    icon: 'note',
    prefix: '/front-end/',
    children: [
      { text: '网页', icon: 'web', link: 'webpage/html/intro' },
      { text: 'JavaScript', icon: 'javascript', link: 'javascript/intro' },
      { text: 'Vue', icon: 'vue', link: 'vue' },
      { text: 'React', icon: 'react', link: 'react' }
    ]
  },
  { text: '简历', icon: 'article', link: '/resume/README.md' }
])
