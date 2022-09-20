<template>
  <el-container>
    <el-aside>
      <Menu/>
    </el-aside>
    <el-container>
      <el-header class="el-header">
        <Header/>
      </el-header>
      <el-main class="el-main">
        <Content/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  height: 85px;
  padding: 0;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}

.el-aside {
  width: auto;
  color: #333;
  background-color: #191a23;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 15px;
}
</style>
