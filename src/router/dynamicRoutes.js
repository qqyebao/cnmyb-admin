import { defineAsyncComponent } from 'vue';

function loadView(viewPath) {
    return defineAsyncComponent(() => import(`@/views/${viewPath}.vue`));
}

export async function loadMenusAndRoutes(menuList) {
    console.log('menuList', menuList)
    return buildRoutesFromMenus(menuList);
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
