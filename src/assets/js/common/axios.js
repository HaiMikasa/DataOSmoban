import axios from 'axios'
import { Message } from 'element-ui'
import router from '../../../router/index'
import baseUrl from './env'
import Vue from 'vue'
const v = new Vue()
const qs = require('qs')

var instance = axios.create({
  baseURL: baseUrl.eduPlatformHost,
  timeout: 50000,
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

// 请求拦截器
instance.interceptors.request.use(config => {
  if (localStorage.getItem('daasToken')) {
    const tokenData = JSON.parse(localStorage.getItem('daasToken'))
    Object.assign(config.headers, {
      accessToken: tokenData.accessToken,
      accountId: tokenData.accountId
    })
  } else {
    router.push({ path: '/' })
  }
  return config
},
error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
// respone拦截器
instance.interceptors.response.use(
  response => {
    // 校验Http状态码
    const status = response.status
    if (status === 200) {
      /**
       * 部分接口返回code和message，需要自行判断结果
       */
      // if (response.data.code === 11030113 || response.data.msg === 'token不能为空') {
      //   // 没权限或者登录失效统一跳无权限页面
      //   router.push({ name: 'noJurisdiction' })
      // }
      return response.data
    } else if (status === 401) {
      // router.push({ name: 'noJurisdiction' })
    } else {
      Message({
        message: status + response.statusText,
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  error => {
    if (router.history.current.name !== 'login') {
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        // 请求超时提示
        Message({
          message: '网络或服务器繁忙，请稍后再试',
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
    return Promise.reject(error)
  }
)
export default instance
