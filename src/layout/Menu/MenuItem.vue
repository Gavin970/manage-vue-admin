<template>
  <el-sub-menu v-if="item.children" :index="index + Date.now()">
    <template #title>
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.title }}</span>
    </template>
    <div v-for="(c_item, c_index) in item.children" :key="c_index">
      <menu-item :index="(c_index + 1).toString()" :item="c_item"></menu-item>
    </div>
  </el-sub-menu>

  <el-menu-item v-if="item && item.pid !== 0" :index="item.path">
    <el-icon>
      <component :is="item.icon"></component>
    </el-icon>
    <template #title>{{ item.title }}</template>
  </el-menu-item>
</template>

<script setup>
const props = defineProps({
  index: {
    type: String,
    default: ''
  },
  item: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>
::v-deep(.el-sub-menu__title) {
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: white;
    background: #191a23;
  }
}

.el-menu-item {
  color: rgba(255, 255, 255, 0.7);
  background: #191a23;

  &:hover {
    color: white;
  }
}

.el-menu-item.is-active {
  color: white;
  background: #2d8cf0 !important;
}
</style>
