import {createRouter, createWebHashHistory} from "vue-router";
import routes from './routers'
import {useStore} from "@/store";


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

console.log(222, router)

const LOGIN_STATE = {
  IS_LOGIN: 'Login'
}

router.beforeEach((to, from, next) => {
  const store = useStore()
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
    console.log(4)
    next()
  }
})
export default router
