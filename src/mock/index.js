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

Mock.mock('/api/routes', 'get', {
  code: 200,
  data: [
    {
      index: '1',
      icon: 'el-icon-menu',
      title: '首页',
      path: '/home'
    },
    {
      index: '2',
      icon: 'el-icon-chat-dot-round',
      title: '消息',
      path: '/messages'
    },
    {
      index: '3',
      icon: 'el-icon-bank-card',
      title: '钱包',
      path: '/wallet'
    },
    {
      index: '4',
      icon: 'el-icon-s-promotion',
      title: '活动',
      path: '/activities'
    },
    {
      index: '5',
      icon: 'el-icon-document',
      title: '交易',
      path: '/transactions'
    },
    {
      index: '6',
      icon: 'el-icon-user-solid',
      title: '收款人',
      path: '/receivers'
    },
    {
      index: '7',
      icon: 'el-icon-question',
      title: '帮助中心',
      path: '/help-center'
    },
    {
      index: '8',
      icon: 'el-icon-setting',
      title: '设置',
      path: '/settings'
    }
  ]
})

export default Mock