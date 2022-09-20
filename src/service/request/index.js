import axios from "axios";

/**
 * @description: request method
 */
const RequestEnum = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

export default class CreateAxiosInstance {
  constructor(options) {
    this.instance = axios.create({
      baseURL: '',
      ...options
    })

    this.instance.interceptors.request.use(
      config => {
        // console.log(this.instance.defaults.headers)
        // console.log(config)
        // if (!config.headers) {
        // 	console.log('!!!!!!')
        // 	Object.assign(this.instance.defaults.headers, config.headers)
        // }
        this.requestStart && this.requestStart(config)
        return config
      }, error => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      res => {
        // console.log('response', res)
        // return Promise.resolve(res)
        this.requestEnd && this.requestEnd(res.config)
        // console.log('resconfig', res.config)
        return this.dataFactory && this.dataFactory(res)
      }, error => {
        if (error.config) {
          // console.log('errorconfig', error.config)
          this.requestEnd && this.requestEnd(error.config)
        }
        return this.requestError && this.requestError(error)
      }
    )
  }

  request(url, data, config) {
    if (!url) {
      throw new Error('Please configure the correct request parameters!')
    }
    // console.log('config:', config)
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      config.params = Object.assign(data || {})
    } else {
      config.data = Object.assign(data || {})
    }
    config.url = url
    return this.instance.request(config)
  }

  get(url, data, config) {
    return this.request(url, data, {...config, method: RequestEnum.GET})
  }

  post(url, data, config) {
    return this.request(url, data, {...config, method: RequestEnum.POST})
  }
}

// export default new CreateAxiosInstance({
// 	baseURL: '',
// 	timeout: 10000,
// })
