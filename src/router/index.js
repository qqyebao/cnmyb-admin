import { createRouter, createWebHistory } from 'vue-router'
import {useAppStore} from '@/stores/index.js'
import {loadMenusAndRoutes} from '@/router/dynamicRoutes.js'
import {getCache} from '@/utils/cache.js'

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

router.beforeEach(async (to, from, next) => {
  // 校验是否已经登录，未登录跳转登录页面
  const token = getCache('token', true, '');
  console.log('token', token)
  const userStore = useAppStore();
  if (token === '') {
    // 如果未登录且目标路由不是登录页面，则跳转到登录页面
    if (to.name !== 'Login') {
      return next({name: 'Login'});
    }
    return next()
  } else if (!userStore.state.isRouteLoaded) {
    const dynamicRoutes = await loadMenusAndRoutes(userStore.state.menus);
    router.addRoute({
      path: '/layout',
      name: 'Layout',
      component: () => import('@/layout/Layout.vue'),
      children: dynamicRoutes
    });

    // 添加 404 路由（必须最后添加）
    router.addRoute({
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue')
    });

    userStore.updateState({isRouteLoaded: true})

    next({...to, replace: true});
  } else {
    return next()
  }
})

export default router
