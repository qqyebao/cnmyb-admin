import request from '@/utils/request.js'

export const getUserInfo = (params) => {
    return request.get('/user/info')
}
