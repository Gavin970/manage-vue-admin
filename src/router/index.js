import {createRouter, createWebHashHistory} from "vue-router";
import routes, {generatorRouters} from './routers'
import {useStore} from "@/store";

const modules = import.meta.glob('../views/**/**.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const LOGIN_STATE = {
  IS_LOGIN: 'Login'
}

router.beforeEach(async (to, from, next) => {
  const store = useStore()
  const userRouters = store.layout.userRouters
  const token = localStorage.getItem('token')
  // 未登录跳转登录页
  if (!token && to.name === LOGIN_STATE.IS_LOGIN) {
    console.log(1)
    next()
  }
  // 未登录跳转非登录页
  else if (!token && to.name !== LOGIN_STATE.IS_LOGIN) {
    console.log(2)
    next({name: 'Login'})
  }
  // 已登录跳转登录页
  else if (token && to.name === LOGIN_STATE.IS_LOGIN) {
    console.log(3)
    next({name: 'Home'})
  }
  // 已登录跳转非登录页
  else if (token && to.name !== LOGIN_STATE.IS_LOGIN) {
    if (store.layout.menuList.length === 0) {
      await store.layout.getMenuList()
      const newRoutes = generateRouter(store.layout.userRouters)
      const layout = routes.find((item) => {
        return item.name === 'Layout'
      })
      layout.children = [...generatorRouters, ...newRoutes]
      router.addRoute(layout)
      router.replace(to.path)
    }
    next()
  }
})
export default router

const generateRouter = (userRouters) => {
  const newRouters = userRouters.map((router) => {
    const isParent = router.pid === 0 && router.children
    const routes = {
      path: router.path,
      name: router.name,
      children: [],
      component: modules[`../views${router.path}/index.vue`]
    }

    if (isParent && router.children[0]) {
      routes.redirect = router.children[0].path
    }
    if (routes && router.children) {
      routes.children = generateRouter(router.children)
    }
    return routes
  })
  return newRouters
}
