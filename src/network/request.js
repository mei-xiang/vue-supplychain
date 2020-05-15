/**
 * 用于请求的相关配置
 */
import axios from 'axios'
import router from '../router'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // baseURL: '/api', // 设置反向代理 
    baseURL: 'http://jingruiit.f3322.net:10087/services/',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )

  instance.interceptors.response.use(
    res => {
      // 防止伪造uuid或者超时
      // console.log(res)
      if (res.data.code == 1000) return router.push('/login')
      return res
    },
    err => {
      // console.log(err)
    }
  )

  // instance是一个promise对象
  return instance(config)
}
