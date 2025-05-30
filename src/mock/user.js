import Mock from 'mockjs'

Mock.mock('/api/login', 'post', {
    code: 200,
    data: {
        token: '@guid'
    }
})

Mock.mock('/user/info', 'get', {
    code: 200,
    data: {
        id: '@id',
        name: '@cname',
        phone: '19100000001',
        email: '111@qq.com',
        deptList: [
            {
                id: '@id',
                name: '@cname'
            }
        ],
        currDeptId: '1111111',
        currDeptName: '测试部门',
        roleIdList: ['111','222']
    }
})
