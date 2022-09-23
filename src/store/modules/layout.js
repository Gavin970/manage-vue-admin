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
      this.userRouters = getTreeMenus(this.menuList)
    }
  }
})

// 将数组menuList转换为树状结构
const getTreeMenus = (menuList) => {
  const treeMenuList = []
  const cache = {}

  // 将menuList数组中的每一项的rid作为对象的Key，每一项作为value
  menuList.forEach((treeItem) => {
    cache[treeItem.rid] = treeItem
  })

  menuList.forEach((treeItem) => {
    // 将menuList数组中每一项的pid作为key去查找数据，如果有则说明该项为对应rid的子路由
    const parent = cache[treeItem.pid]
    if (parent) {
      if (!parent.children) {
        parent.children = []
      }
      parent.children.push(treeItem)
    } else {
      treeMenuList.push(treeItem)
    }
  })
  return treeMenuList
}
