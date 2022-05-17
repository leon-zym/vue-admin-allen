import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [
  {
    path: '/',
    // 公共布局
    component: Layout,
    // 重定向
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // 按需引入
        component: () => import('@/views/Dashboard'),
        // 界面显示内容
        meta: {
          title: '看板',
          icon: 's-data',
        },
      },
      {
        path: '/goods',
        name: 'Goods',
        meta: {
          title: '商品管理',
          icon: 's-goods',
        },
        component: () => import('@/views/Goods'),
      },
      {
        path: '/users',
        name: 'Users',
        meta: {
          title: '用户管理',
          icon: 'user-solid',
        },
        component: () => import('@/views/Users'),
      },
      {
        path: '/others',
        name: 'Others',
        meta: {
          title: '其他',
          icon: 'circle-plus',
        },
        component: () => import('@/views/Others'),
        children: [
          {
            path: '/others/page1',
            name: 'Page1',
            meta: {
              title: '页面1',
              icon: 's-grid',
            },
            component: () => import('@/views/Others/Page1'),
          },
          {
            path: '/others/page2',
            name: 'Page2',
            meta: {
              title: '页面2',
              icon: 's-grid',
            },
            component: () => import('@/views/Others/Page2'),
          },
          {
            path: '/others/page3',
            name: 'Page3',
            meta: {
              title: '页面3',
              icon: 's-grid',
            },
            component: () => import('@/views/Others/Page3'),
          },
        ],
      },
    ],
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
