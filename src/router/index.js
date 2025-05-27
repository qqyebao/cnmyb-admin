import { createRouter, createWebHistory } from 'vue-router'
import {useUserStore} from '@/store/user.js'
import {loadMenusAndRoutes} from '@/router/dynamicRoutes.js'

const staticRoutes = [
  {
    path: '/',
    redirect: '/layout'
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
  routes: staticRoutes
})

router.beforeEach((to, from, next) => {
  // 校验是否已经登录，未登录跳转登录页面
  const userStore = useUserStore();
  console.log(userStore.token)
  console.log(to.name)
  console.log(userStore.isRouteLoaded)
  if (userStore.token === '') {
    // 如果未登录且目标路由不是登录页面，则跳转到登录页面
    if (to.name !== 'Login') {
      return next({ name: 'Login' });
    }
    return next()
  } else if (!userStore.isRouteLoaded){
    loadMenusAndRoutes(userStore.userInfo.id).then(r => {userStore.setIsRouteLoaded(true)})// 添加动态路由
    next({ ...to, replace: true });
  } else {
    return next()
  }
})

export default router
