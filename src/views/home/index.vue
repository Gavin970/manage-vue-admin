<template>
  <div class="rowCC" style="height: 100%">
    <div class="left">
      <h1 style="color: #2d8cf0">我是首页</h1>
      <div class="tab columnCS">
        <!--        <div v-for="(items,index) in routers[1].children" :key="index">-->
        <!--          <div v-if="items.children">-->
        <!--            <div>{{ items.title }}</div>-->
        <!--            <div v-for="(item,index) in items.children" :key="index">-->
        <!--              <router-link :to="'/home/'+items.path+'/'+item.path" class="tab-nav child">{{ item.title
        }}</router-link>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div v-else>-->
        <!--            <router-link :to="'/home/'+items.path" class="tab-nav">{{ items.title }}</router-link>-->
        <!--          </div>-->
        <!--        </div>-->
        <div v-for="(items,index) in routers[1].children" :key="index">
          <div>
            <router-link :to="'/home/'+items.path" class="tab-nav">{{ items.title }}</router-link>
          </div>
        </div>
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
import routers from '@/router/routers.js'
</script>

<style lang="scss" scoped>
.left {
  width: 300px;
  height: 100%;
  font-size: 20px;
  border-right: 1px solid #000;

  .tab {
    margin: 20px;

    .tab-nav {
      margin-bottom: 10px;
      width: 200px;
      font-size: 20px;
      color: #000;
    }

    .child {
      margin-left: 10px;
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
