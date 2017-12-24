import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const news = r => require.ensure([], () => r(require('../page/news/news')), 'news')
const newsDetail = r => require.ensure([], () => r(require('../page/news/newsDetail')), 'newsDetail')
const products = r => require.ensure([], () => r(require('../page/products/products')), 'products')
const recruit= r => require.ensure([], () => r(require('../page/recruit/recruit')), 'recruit')
const about = r => require.ensure([], () => r(require('../page/about/about')), 'about')

export default [
  {
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
      //地址为空时跳转home
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      },
      {
        path: '/news',
        component: news,
      },
      {
        path: '/news/:id',
        component: newsDetail,
      },
      {
        path: '/products',
        component: products
      },
      {
        path: '/recruit',
        component: recruit
      },
      {
        path: '/about',
        component: about
      },
    ]
  }
]
