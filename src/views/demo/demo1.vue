<template>
  <h1>我是demo1组件</h1>
  <br>
  <router-link class="nav" to="/home/demoOne/demoOneOne">戴莫1-1</router-link>
  <router-link class="nav" to="/home/demoOne/demoOneTwo">戴莫1-2</router-link>

  <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>
.nav {
  margin-left: 10px;
  font-size: 18px;
  color: #666;
}
</style>
