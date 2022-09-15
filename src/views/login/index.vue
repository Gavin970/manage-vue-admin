<template>
  <div class="bg">
    <div class="login-tab">
      <div class="tab" @click="isPhone = false">账号登录</div>
      <div class="tab" @click="isPhone = true">验证码登录</div>
    </div>
    <div class="login-box">
      <by-name v-if="!isPhone"></by-name>
      <by-phone v-else></by-phone>
    </div>
  </div>
</template>

<script setup>
import ByName from './by-name.vue'
import ByPhone from './by-phone.vue'

let isPhone = ref(false)
</script>

<style lang="scss">
.login-tab {
  margin: 100px auto 10px auto;
  width: 400px;

  .tab {
    display: inline-block;
    margin-left: 10px;
    cursor: pointer;
    color: #999;
  }
}

.login-box {
  margin: 0 auto;
  padding: 10px;
  width: 400px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 15px;

  .ipt {
    margin-bottom: 5px;
    margin-right: 10px;
    width: 200px;
  }

  .countDown {
    display: inline-block;
    color: #999;
    cursor: pointer;
  }

  .btn {
    margin-top: 15px;
  }
}
</style>
