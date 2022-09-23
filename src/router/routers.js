import Layout from '@/layout/index.vue'

const Routers = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      }
    ]
  }
]

export default Routers

// 动态路由处理
export const generatorRouters = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
  }
]
