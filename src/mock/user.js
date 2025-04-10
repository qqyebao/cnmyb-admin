import Mock from 'mockjs'

Mock.mock('/api/login', 'post', {
    code: 200,
    data: {
        token: '@guid'
    }
})

Mock.mock('/api/user', 'get', {
    code: 200,
    data: {
        id: '@id',
        name: '@cname',
        avatar: '@image(100x100)',
        role: '@pick(["admin", "editor"])'
    }
})
