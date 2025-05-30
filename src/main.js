import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import router from './router'
import './mock' // 开发环境启用mock
import '@/styles/index.css'

// 1. 创建 Pinia
const pinia = createPinia()

// 2. 创建 Vue 应用实例
const app = createApp(App);

// 3. 使用插件（UI、状态管理、路由）
app.use(ElementPlus)
app.use(pinia)
app.use(router)

// 4. 挂载应用
app.mount('#app')
