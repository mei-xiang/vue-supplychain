import { request } from 'network/request'
import Qs from 'qs'

export function register({ leaseId, username, password, companyName }) {
  return request({
    method: 'post',
    url: '/customer/front/all/register',
    data: Qs.stringify({
      leaseId,
      username,
      password,
      'companyView.companyName': companyName
    })
  })
}
