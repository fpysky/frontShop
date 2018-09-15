import request from '@/utils/request'

// export function fetchCartList(query) {
//   return request({
//     url: 'api/cart',
//     method: 'get',
//     params: query
//   })
// }

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