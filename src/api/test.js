import request from '@/utils/request'

export function test() {
  return request({
    url: 'api/products/favorites',
    method: 'get',
  })
}