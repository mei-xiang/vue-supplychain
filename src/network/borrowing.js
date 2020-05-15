import { request } from './request'
import Qs from 'qs'

// 获取借款金额
export function getReapyManage () {
  return request({
    method: 'post',
    url: '/finance/front/all/getReapyManage',
    data: Qs.stringify({
      uuid: localStorage.getItem('uuid')
    })
  })
}

// 获取推荐业务数据
// export function 
