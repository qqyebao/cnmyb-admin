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
import { useAppStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'
import axios from '@/utils/request.js'
import { setCache } from '@/utils/cache.js'

const form = reactive({
  username: '',
  password: ''
})
const userStore = useAppStore()
const router = useRouter()

const handleLogin = async () => {
  axios.post('/api/login', form).then(res => {
    console.log('res', res);
    setCache('token',true, res.data.token);
    userStore.initAPP();
    router.push('/');
  }).catch(error => {
    console.error('登录失败');
  })
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
