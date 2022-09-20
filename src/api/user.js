import request from "@/config"

/**
 * login
 * @param data
 */
export const login = (data) => {
  // console.log(111, data)
  return request.post('/web/api/login', data, {load: true})
}

/**
 * logout
 */
export const logout = () => {
  return request.get('/web/api/logout').then(() => {
    console.log("logout...")
  })
}


/**
 *  getUserMenu
 */
export const getUserMenu = () => {
  return request.post('/web/api/user/getUserMenu').then((res) => {
    return res
    console.log('getUserMenu...')
  })
}
