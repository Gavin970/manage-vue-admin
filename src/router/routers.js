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
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: 'demoOne',
        name: 'Demo1',
        component: () => import('@/views/demo/demo1.vue')
      },
      {
        path: 'demoTwo',
        name: 'Demo2',
        component: () => import('@/views/demo/demo2.vue')
      },
      {
        path: 'demoThree',
        name: 'Demo3',
        component: () => import('@/views/demo/demo3.vue')
      }
    ]
  }
]

export default Routers
