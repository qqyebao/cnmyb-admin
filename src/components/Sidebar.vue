<template>
  <el-menu :default-active="$route.path" router>
    <template v-for="menu in menus" :key="menu.path">
      <el-sub-menu v-if="menu.children" :index="menu.path">
        <template #title>
          <el-icon><component :is="menu.icon" /></el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <el-menu-item
            v-for="child in menu.children"
            :key="child.path"
            :index="`${menu.path}/${child.path}`">
          {{ child.meta.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="menu.path">
        <el-icon><component :is="menu.icon" /></el-icon>
        <span>{{ menu.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const { menus } = useUserStore();
</script>
