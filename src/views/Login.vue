<template>
  <div class="login-card">
    <el-card class="box-card">
      <el-form @submit.prevent="handleLogin">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/store/user.js'
import { useRouter } from 'vue-router'
import axios from '@/api/request'

const form = reactive({
  username: '',
  password: ''
})
const userStore = useUserStore()
const router = useRouter()

const handleLogin = async () => {
  const res = await axios.post('/api/login', form)
  userStore.setToken(res.data.token)
  router.push('/')
}
</script>

<style scoped>
.login-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 300px;
}

</style>