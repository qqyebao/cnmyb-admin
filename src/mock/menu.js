import Mock from 'mockjs'

Mock.mock('/menu/tree', 'get', {
    code: 200,
    msg:  '请求成功',
    data: [
        {
            "id": "1",
            "parentId": null,
            "name": "系统管理",
            "path": "/system",
            "component": "Layout",
            "icon": "setting",
            "menuType": 0,
            "enabled": true,
            "children": [
                {
                    "id": "2",
                    "parentId": "1",
                    "name": "用户管理",
                    "path": "user",
                    "component": "system/User",
                    "icon": "user",
                    "menuType": 1,
                    "enabled": true
                }
            ]
        }
    ]
})


Mock.mock('/menu/permissions', 'get', {
    code: 200,
    msg:  '请求成功',
    data: ['sys.user.list.add','sys.user.list.edit']
})

