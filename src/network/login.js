import { request } from 'network/request'
import Qs from 'qs'

export function login({ username, password, leaseId }) {
  return request({
    method: 'post',
    url: '/customer/front/all/login',
    data: Qs.stringify({
      username,
      password,
      leaseId
    })
  })
}
