import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // 显示在导航栏上的名称
    label: '首页',
    // ele的图标后缀部分
    icon: 's-home',
    // 按需引入
    component: () => import('../views/Home')
  },
  {
    path: '/goods',
    name: 'Goods',
    label: '商品管理',
    icon: 's-goods',
    component: () => import('../views/Goods')
  },
  {
    path: '/user',
    name: 'User',
    label: '用户管理',
    icon: 'user-solid',
    component: () => import('../views/User')
  },
  {
    path: '/others',
    name: 'Others',
    label: '其他',
    icon: 'circle-plus',
    component: () => import('../views/Others'),
    children: [
      {
        path: '/others/page1',
        name: 'Page1',
        label: '页面1',
        component: () => import('../views/Others/Page1')
      },
      {
        path: '/others/page2',
        name: 'Page2',
        label: '页面2',
        component: () => import('../views/Others/Page2')
      },
      {
        path: '/others/page3',
        name: 'Page3',
        label: '页面3',
        component: () => import('../views/Others/Page3')
      },
    ]
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})