const userInfo = {
  userName: '',
  type: '',
  uid: '',
  token: ''
}

export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo
    }
  },
  getters: {},
  actions: {
    setUserInfo(result) {
      this.userInfo.userName = result.userName
      this.userInfo.type = result.type
      this.userInfo.uid = result.uid
      this.userInfo.token = result.token
    }
  }
})
