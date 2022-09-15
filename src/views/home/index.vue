<template>
  <div class="rowCC" style="height: 100%">
    <div class="left">
      <h1 style="color: #2d8cf0">我是首页</h1>
      <div class="tab columnCS">
        <router-link class="tab-nav" to="/home/demoOne">戴莫1</router-link>
        <router-link class="tab-nav" to="/home/demoTwo">戴莫2</router-link>
        <router-link class="tab-nav" to="/home/demoThree">戴莫3</router-link>
      </div>
    </div>
    <div class="right">
      <div class="top"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.left {
  width: 300px;
  height: 100%;
  background-color: #191a23;

  .tab {
    margin: 20px;

    .tab-nav {
      margin-bottom: 10px;
      width: 200px;
      border: 1px solid #ddd;
      font-size: 20px;
      color: #fff;
    }
  }
}

.right {
  flex: 1;
  height: 100%;
  //background-color: skyblue;

  .top {
    height: 150px;
    border-bottom: 1px solid #000;
  }
}
</style>
