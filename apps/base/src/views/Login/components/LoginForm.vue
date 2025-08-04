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

</script>


<style lang="less" scoped>

</style>