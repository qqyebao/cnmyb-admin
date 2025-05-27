import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import './mock' // 开发环境启用mock
import '@/styles/index.css'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPersistedState)
app.use(ElementPlus)
app.use(pinia)
app.use(router)

app.mount('#app')
