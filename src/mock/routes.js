import Mock from 'mockjs'

Mock.mock('/menu/routes', 'get', {
    code: 200,
    msg: "请求成功",
    data: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            meta: {
                title: '首页',
                icon: 'el-icon-s-home',
                keepAlive: true
            },
            component: '/view/Dashboard'
        },
        {
            path: '/user',
            name: 'User',
            meta: {
                title: '登录',
                icon: 'el-icon-s-custom',
                keepAlive: true
            },
            component: '/view/User'
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                title: '关于',
                icon: 'el-icon-s-custom',
                keepAlive: true
            },
            component: 'About'
        }
    ]
})

export default Mock
