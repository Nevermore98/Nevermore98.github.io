import { arraySidebar } from 'vuepress-theme-hope'

export const webpage = arraySidebar([
  {
    text: 'HTML',
    collapsable: false,
    prefix: 'html/',
    children: ['intro', 'tag', 'html5']
  },
  {
    text: 'CSS',
    collapsable: false,
    prefix: 'css/',
    children: [
      'intro',
      'box',
      'flex',
      'BFC',
      'css-priority',
      'align-center',
      'css-triangle',
      'responsive'
    ]
  }
])
