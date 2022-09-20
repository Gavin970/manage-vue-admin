import Layout from '@/layout/index.vue'

const Routers = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    // redirect: to => {
    //   return '/login/byName'
    // },
    // redirect: '/login',
    // children: [
    //   {
    //     path: 'byName',
    //     name: 'Login',
    //     component: () => import('@/views/login/by-name.vue'),
    //   },
    //   {
    //     path: 'byPhone',
    //     name: 'Login',
    //     component: () => import('@/views/login/by-phone.vue'),
    //   }
    // ]
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
