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

const getTreeMenus = (menuList) => {
  const treeMenuList = []
  const cache = {}
  menuList.forEach((treeItem) => {
    cache[treeItem.rid] = treeItem
  })

  menuList.forEach((treeItem) => {
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
