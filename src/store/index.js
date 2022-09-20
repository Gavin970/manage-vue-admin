import user from './modules/user.js'
import layout from './modules/layout.js'

export function useStore() {
  return {
    user: user(),
    layout: layout()
  }
}
