import request from "@/config"

/**
 * 请求超时
 * @param data
 */
export const requestTimeout = (data) => {
  // console.log(111, data)
  return request.post('/web/api/timeout', data, {load: true})
}

/**
 * 请求404
 * @param data
 */
export const request404 = (data) => {
  // console.log(111, data)
  return request.post('/web/api/timeout1', data)
}

// Promise
/**
 * 请求延时
 * @param data
 */
export const requestDelay = (data) => {
  // console.log(111, data)
  return request.post('/web/api/delay', data, {load: true})
}
