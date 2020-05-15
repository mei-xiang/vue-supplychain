import { request } from './request'
import Qs from 'qs'

// 账户可用额度
export function getUsableLimit() {
  return request({
    url: '/credit/front/all/usableLimit',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}

// 企业授信数据
export function getAllCreditLimit() {
  return request({
    url: '/credit/front/all/allCreditLimit',
    method: 'post',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}
