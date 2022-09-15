<template>
  <div class="loginByName">
    <el-input v-model="userInfo.userName" class="ipt" placeholder="请输入用户名："/>
    <el-input v-model="userInfo.password" class="ipt" placeholder="请输入密码：" type="password"/>
  </div>
  <login-btn :password="userInfo.password" :userName="userInfo.userName"></login-btn>
</template>

<script setup>
const userInfo = reactive({
  userName: '',
  password: '',
  phone: '',
  authCode: ''
})
</script>

<style scoped>

</style>
