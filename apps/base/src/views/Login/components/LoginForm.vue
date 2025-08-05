<template>
<div>
  <div class="flex justify-center">
    <el-avatar :size="80" :src="avatar"
    />
  </div>

  <h2 class="welcome flex justify-center">{{ $t('login.welcome') }}</h2>

  <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      size="large"
  >
    <el-form-item prop="username">
      <el-input
          v-model="loginForm.username"
          :placeholder="$t( 'common.username' )"
          class="form-input"
          :prefix-icon="User"
      />
    </el-form-item>

    <el-form-item prop="password">
      <el-input
          v-model="loginForm.password"
          type="password"
          :placeholder="$t( 'common.password' )"
          show-password
          class="form-input"
          :prefix-icon="Key"
      />
    </el-form-item>

    <div class="flex justify-end">
      <el-button type="primary" link @click=""
      >
        忘记密码
      </el-button>
    </div>

    <el-form-item class="mt-6!">
      <el-button class="w-full" type="primary" size="large" round
                 :loading="loading" @click="handleLogin"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>

  <div class="flex justify-center">
    <span class="signup-text">还没有账号？</span>
    <el-button type="primary" link @click=""
    >
      创建账号
    </el-button>
  </div>
  <!-- TODO:待实现三方登录 --->
</div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
import { User, Key } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import {ElMessage} from "element-plus";

const loginFormRef = ref()
const loading = ref(false)
const avatar = ref(new URL('@/assets/Login/default_avatar.png', import.meta.url).href)

const { t } = useI18n({ useScope: 'global' })

const loginForm = reactive({
  username: '',
  password: ''
})

//校验提示词i8n
const userReMsg = computed(() => t('validate.required', {item: t('common.username')}))
const passReMsg = computed(() => t('validate.required', {item: t('common.password')}))
const passLeMsg = computed(() => t('validate.min', {item: t('common.password'), min: 6}))


const loginRules = {
  username: [
    { required: true, message: userReMsg, trigger: 'blur' }
  ],
  password: [
    { required: true, message: passReMsg, trigger: 'blur' },
    { min: 6, message: passLeMsg, trigger: 'blur' }
  ]
}

const handleLogin = async () => {
  if (!loginFormRef.value) return

  try {
    const valid = await loginFormRef.value.validate()
    if (valid) {
      loading.value = true
      // 模拟登录请求
      setTimeout(() => {
        loading.value = false
        ElMessage.success('登录成功')
      }, 1000)
    }
  } catch (error) {
    console.log('验证失败:', error)
  }
}

</script>


<style lang="less" scoped>
.welcome {
  font-size: 22px;
  font-weight: 500;
  margin: 28px 0 20px 0;
  transition: color .3s cubic-bezier(.4, 0, .2, 1);
  color: #000000;
}
</style>