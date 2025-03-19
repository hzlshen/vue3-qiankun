// src/router/index.js 或 src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../App.vue';
// import About from '../views/About.vue';
// import routes from './router'
import {qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
 
const routes = [
  {
    path: '',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('../views/home/index.vue')
      // },
      // {
      //   // history模式需要通配所有路由，详见vue-router文档
      //   path: '/app/app-vue3/:pathMatch(.*)*',
      //   name: 'app-vue3',
      //   meta: {},
      //   component: () => import('@/components/SubContainer.vue')
      // }
    ]
  }
]
 
const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__? '/sub-vue' : '/'
  ), // 使用HTML5 History模式
  routes, // `routes: routes` 的缩写
});
 
export default router;