import { defineAsyncComponent } from 'vue';
import {getMenuTree} from "@/api/menu.js";
import router from "@/router/index.js";

function loadView(viewPath) {
    return defineAsyncComponent(() => import(`@/views/${viewPath}.vue`));
}

export async function loadMenusAndRoutes(userId) {
    const params = {
        userId: userId
    };
    const menuList = await getMenuTree(params);
    this.menus = menuList;
    console.log(menuList)
    const dynamicRoutes = buildRoutesFromMenus(menuList);
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
}

export function buildRoutesFromMenus(menus) {
    const routes = [];

    menus.forEach(menu => {
        const route = {
            path: menu.path.startsWith('/') ? menu.path : `/${menu.path}`,
            name: menu.routeName || menu.name,
            component: menu.component === 'Layout' ? () => import('@/layout/Layout.vue') : loadView(menu.component),
            meta: {
                title: menu.name,
                icon: menu.icon,
                keepAlive: menu.keepAlive,
                isLink: menu.isLink,
            }
        };

        if (menu.children && menu.children.length > 0) {
            route.children = buildRoutesFromMenus(menu.children);
        }

        routes.push(route);
    });

    return routes;
}
