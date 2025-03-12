import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// 响应拦截器
service.interceptors.response.use(
    response => response.data,
    error => {
        console.error('API Error:', error)
        return Promise.reject(error)
    }
)

export default service