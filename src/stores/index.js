import { defineStore } from 'pinia'
import {getMenuTree, getPermissions} from '@/api/menu.js'
import {getUserInfo} from "@/api/user.js";

export const useAppStore = defineStore('user', {
    state:() => {return {
        state: {
            isRouteLoaded: false, // 路由是否已经加载
            permissions: [], // 权限列表
            userInfo: {
                id: '',
                name: '',
                phone: '',
                email: '',
                deptList: [],
                currDeptId: '',
                currDeptName: '',
                roleIdList: []
            },
            menus: []
        }
    }},
    actions: {
        updateState(data) {
            Object.keys(data).forEach((key) => {
                this.state[key] = data[key];
            });
        },
        initAPP(){
            Promise.all([
                getUserInfo(),
                getMenuTree(),
                getPermissions()
            ]).then(([userInfo, menus, permissions]) => {
                console.log("userInfo：",  userInfo.data)
                console.log("permissions：",  permissions.data)
                console.log("menus：",  menus.data)
                if(userInfo.code !== 200){
                    console.error("初始化用户数据失败：",  userInfo.msg)
                }
                this.updateState({
                    userInfo: userInfo.data ?  userInfo.data : {},
                    menus: menus.data ?  menus.data : [],
                    permissions: permissions.data ?  permissions.data : []
                })
            }).catch(error =>{
                console.error('API Error:', error)
            })
        },
        logout() {
            this.updateState({
                isRouteLoaded: false, // 路由是否已经加载
                permissions: [], // 权限列表
                userInfo: {},
                menus: []
            })
        }
    }
})
