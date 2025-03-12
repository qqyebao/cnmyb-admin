<template>
  <el-container style="height: 100vh;">
    <!-- 侧边栏 -->
    <el-aside width="260px">
      <div class="sidebar">
        <h3>数字钱包</h3>
        <!-- 侧边栏菜单 -->
        <el-menu :default-active="activeIndex">
          <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index" :route="{ path: item.path }">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header style="background-color: #fff; height: 70px; display: flex; align-items: center; justify-content: space-between;">
        <div>首页</div>
        <div>
          <!-- 右侧操作，如用户信息、设置等 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              Koto<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <!-- 内容区域 -->
      <el-main style="padding: 20px;">
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  name: 'Layout',
  setup() {
    const route = useRoute()
    const activeIndex = ref(route.path)
    const menuItems = ref([])

    onMounted(async () => {
      try {
        const response = await axios.get('/api/routes')
        menuItems.value = response.data
      } catch (error) {
        console.error('Failed to fetch menu items:', error)
      }
    })

    return {
      activeIndex,
      menuItems
    }
  }
}
</script>