import { createPinia } from 'pinia'

const pinia = createPinia()

export default pinia

// 示例 userStore
// store/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        userInfo: null
    }),
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