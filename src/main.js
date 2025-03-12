import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from './store/user.js'
import router from './router'
import './mock' // 开发环境启用mock
import '@/styles/index.css'

const app = createApp(App);

app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')