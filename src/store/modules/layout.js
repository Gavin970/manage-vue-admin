import api from '@/api'

export default defineStore({
  id: 'layout',
  state: () => {
    return {
      menuList: [],
      userRouters: []
    }
  },
  getters: {},
  actions: {
    async getMenuList() {
      this.menuList = await api.user.getUserMenu()
    }
  }
})
