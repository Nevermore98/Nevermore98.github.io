import { sidebar } from 'vuepress-theme-hope'
import { javascript } from './front-end'
import { webpage } from './front-end'

export default sidebar({
  // '/',
  // '/home',
  // '/slide',
  // {
  //   icon: 'creative',
  //   text: 'Guide',
  //   prefix: '/guide/',
  //   link: '/guide/',
  //   children: 'structure',
  // },
  '/front-end/javascript': javascript,
  '/front-end/webpage': webpage,
})
