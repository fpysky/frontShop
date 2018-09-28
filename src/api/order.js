import request from '@/utils/request'

export function fetchOrderList() {
  return request({
    url: 'api/orders',
    method: 'get'
  })
}

export function createOrder(data) {
    return request({
      url: 'api/orders',
      method: 'post',
      data
    })
}

export function pay(data) {
    return request({
      url: 'api/payment/alipay/' + data.id,
      method: 'get'
    })
}