<template>
  <el-menu
    :collapse="false"
    :default-active="current"
    class="menu"
    router
    @close="handleClose"
    @open="handleOpen"
  >
    <el-menu-item index="/home">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <template v-for="(item, index) in userRouters" :key="index">
      <menu-item :index="(index + 1).toString()" :item="item"></menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import {useStore} from "@/store";
import MenuItem from './MenuItem.vue'

const store = useStore()
const userRouters = store.layout.userRouters
const router = useRouter()
const current = computed(() => router.currentRoute.value.path)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.menu {
  width: 220px;
  border-right: none;
  background: #191a23;
  color: #fff;
}

// 一级导航
.el-menu-item {
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: white;
    background: #191a23;
  }
}

.el-menu-item.is-active {
  color: white;
  background: #2d8cf0 !important;
}
</style>
