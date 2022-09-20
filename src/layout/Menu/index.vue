<template>
  <div class="menu"></div>
</template>

<script setup>
import api from '@/api'
import router from '@/router'

onMounted(() => {
  getUserMenu()
})

function getUserMenu() {
  api.user.getUserMenu().then(
    res => {
      console.log('userMenu', res)
      initRouter(res)
    }
  ).catch((err) => {
    console.error(err)
  })
}

function initRouter(res) {
  res.forEach((v) => {
    router.addRoute({
      path: v.path,
      name: v.name,
      component: () => import(`../views${v.path}/index.vue`)
    })
  })
  console.log(router.getRoutes())
}

</script>

<style scoped>
.menu {
  width: 220px;
  border-right: 1px solid #000;
}
</style>
