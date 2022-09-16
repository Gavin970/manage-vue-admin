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
        children: [
          {
            path: 'demoOne',
            name: 'Demo1',
            title: '戴莫1',
            component: () => import('@/views/demo/demo1.vue'),
            children: [
              {
                path: 'demoOneOne',
                name: 'Demo11',
                title: '戴莫1-1',
                component: () => import('@/views/demo/demo11.vue')
              },
              {
                path: 'demoOneTwo',
                name: 'Demo12',
                title: '戴莫1-2',
                component: () => import('@/views/demo/demo12.vue')
              }
            ]
          },
          {
            path: 'demoTwo',
            name: 'Demo2',
            title: '戴莫2',
            component: () => import('@/views/demo/demo2.vue'),
            children: [
              {
                path: 'demoTwoOne',
                name: 'Demo21',
                title: '戴莫2-1',
                component: () => import('@/views/demo/demo21.vue')
              }
            ]
          },
          {
            path: 'demoThree',
            name: 'Demo3',
            title: '戴莫3',
            component: () => import('@/views/demo/demo3.vue')
          }
        ]
      }
    ]
  }
]

export default Routers
