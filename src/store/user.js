import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state:() => {return {
        token: localStorage.getItem('token') || '',
        userInfo: {
            name: '',
            avatar: ''
        }
    }},
    actions: {
        setToken(token) {
            this.token = token
            localStorage.setItem('token', token)
        },
        async getUserInfo() {
            // 实际调用API
        }
    }
})