import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from '@/store/user.js'

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'Layout',
    component: import('@/layout/Layout.vue')
  },
  // 其他路由配置
  {
    path: '/login',
    name: 'Login',
    component: import('@/views/Login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 校验是否已经登录，未登录跳转登录页面
  const userStore = useUserStore();
  console.log(userStore.$state.token)
  if (userStore.$state.token === '') {
    // 如果未登录且目标路由不是登录页面，则跳转到登录页面
    if (to.name !== 'Login') {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    // 如果已登录且目标路由是登录页面，则跳转到首页
    if (to.name === 'Login') {
      next('/');
    } else {
      next();
    }
  }
})

export default router