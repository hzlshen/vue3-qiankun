const routes = [
  {
    path: '',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        // history模式需要通配所有路由，详见vue-router文档
        path: '/sub-vue/:pathMatch(.*)*',
        name: 'sub-vue',
        meta: {},
        component: () => import('@/components/SubContainer.vue')
      },
      // {
      //   path: '/app/app-vue2/',
      //   name: 'app-vue2',
      //   meta: {},
      //   component: () => import('@/components/SubContainer.vue')
      // }
    ]
  }
]

export default routes