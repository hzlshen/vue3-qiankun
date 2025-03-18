// src/router/index.js 或 src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
// import About from '../views/About.vue';
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About,
  // },
];
 
const router = createRouter({
  history: createWebHistory(), // 使用HTML5 History模式
  routes, // `routes: routes` 的缩写
});
 
export default router;