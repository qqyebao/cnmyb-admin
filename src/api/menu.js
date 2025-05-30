import request from '@/utils/request.js'

export  const getMenuTree = (params) => {
    return request.get('/menu/tree')
}

export const getPermissions = (params) => {
    return request.get('/menu/permissions')
}
