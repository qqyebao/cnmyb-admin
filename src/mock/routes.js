import Mock from 'mockjs'

Mock.mock('/api/routes', 'get', {
    code: 200,
    msg: "请求成功",
    data: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: '首页',
                icon: 'el-icon-s-home',
                keepAlive: true
            },
            component: 'Home'
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