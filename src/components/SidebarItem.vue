<template>
  <el-sub-menu v-if="hasChildren" :index="item.path">
    <template #title>
      <el-icon v-if="item.icon">
        <component :is="iconMap[item.icon]" />
      </el-icon>
      <span>{{ item.name }}</span>
    </template>
    <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
    />
  </el-sub-menu>

  <el-menu-item v-else :index="item.path">
    <el-icon v-if="item.icon">
      <component :is="iconMap[item.icon]" />
    </el-icon>
    <span>{{ item.name }}</span>
  </el-menu-item>
</template>

<script setup>
import { computed } from 'vue'
import * as Icons from '@element-plus/icons-vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const hasChildren = computed(() => props.item.children && props.item.children.length > 0)

// 动态绑定 icon 组件
const iconMap = Icons
</script>
