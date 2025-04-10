import request from '@/utils/request.js'

export default {
    // 获取菜单树
    getMenuTree(data) {
        return request({
            url: '/menu/tree',
            method: 'get',
            params: data
        })
    },
    // 获取菜单详情
    getMenuDetail(id) {
        return request
    },
    getRoutes() {
        return request({
            url: '/menu/routes',
            method: 'get'
        })
    },
}
