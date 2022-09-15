<template>
  <div class="loginByPhone">
    <el-input v-model="userInfo.phone" class="ipt" placeholder="请输入手机号："/>
    <el-input v-model="userInfo.authCode" class="ipt" placeholder="请输入验证码："/>
    <div v-if="!countDown.isStart" class="countDown" @click="getAuthCode">获取验证码</div>
    <view v-else class="countDown">{{ countDown.num }}</view>
  </div>
  <login-btn :password="userInfo.authCode" :userName="userInfo.phone"></login-btn>
</template>

<script setup>
const userInfo = reactive({
  userName: '',
  password: '',
  phone: '',
  authCode: ''
})
const countDown = reactive({
  num: 10,
  isStart: false
})

function getAuthCode() {
  countDown.isStart = true
  const id = setInterval(() => {
    countDown.num -= 1;
    console.log(111)
    if (countDown.num <= 0) {
      clearInterval(id)
      countDown.isStart = false
    }
  }, 1000)
}
</script>

<style scoped>

</style>
