<template>
  <div class="login-container">
    <!-- 左侧插画区域 -->
    <div class="login-left">
      <div class="login-left-logo">
        <img src="@/assets/Logo.png">
        <span>Xiaojin Admin</span>
      </div>

      <div class="login-left-title">
        开箱即用
      </div>

      <div class="login-left-text">
        颜值与实用并存，中后台前后端框架一站式解决方案
      </div>

      <div class="login-left-pic">
        <img src="@/assets/Login/login_left.png" />
      </div>
    </div>

    <!-- 右侧登录表单区域 -->
    <div class="login-right">
      <div class="shadow-xl login-right-form">
        <div class="flex justify-center">
          <el-avatar :size="80" :src="avatar"
          />
        </div>

        <h2 class="welcome flex justify-center">欢迎来到 Xiaojin Admin! 👋</h2>

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
              placeholder=""
              class="form-input"
              :prefix-icon="User"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder=""
              show-password
              class="form-input"
              :prefix-icon="Key"
            />
          </el-form-item>

          <div class="form-options">
            <span></span>
            <el-link type="primary" :underline="false" class="forgot-link">
              忘记密码
            </el-link>
          </div>

          <el-button
            type="primary"
            size="large"
            class="login-button"
            :loading="loading"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form>

        <div class="signup-section">
          <span class="signup-text">还没有账号？</span>
          <el-link type="primary" :underline="false" class="signup-link">
            创建账号
          </el-link>
        </div>

        <div class="divider">
          <span class="divider-text">其他</span>
        </div>

        <div class="social-login">
          <div class="social-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0Z" fill="#1877F2"/>
            </svg>
          </div>
          <div class="social-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#333"/>
            </svg>
          </div>
          <div class="social-item">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#1DA1F2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Key } from '@element-plus/icons-vue'

const loginFormRef = ref()
const loading = ref(false)
const avatar = ref(new URL('@/assets/Login/default_avatar.png', import.meta.url).href)

const loginForm = reactive({
  username: 'admin',
  password: ''
})

const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
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
.login-container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0px, 1fr));
  background: #f5f5f5;
  gap: 0 12px;
  width: 100%;
  height: 100%;
}

.login-left {
  grid-column: span 4 / span 4;
  background: #E9EDF7;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20% 12px 12px;
  position: relative;
  overflow: hidden;
  align-items: center;


  &-logo {
    color: #409EFF;
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    justify-content: center;
    display: flex;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
      margin-right: 10px;
    }
  }

  &-title {
    font-size: 3rem;
    color: #323d6f;
    font-weight: 900;
    margin: 20px 0;
  }

  &-text {
    color: #323d6f;
    font-size: 16px;
    margin: 20px 0 30px;
  }

  &-pic {
    margin-top: 40px;
    img {
      width: 75%;
      margin: auto;
    }
  }
}

.login-right {
  grid-column: span 8 / span 8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &-form {
    width: 520px;
    background-color: #fff;
    border-radius: 20px;
    padding: 40px 80px;

    .welcome {
      font-size: 22px;
      font-weight: 500;
      margin: 28px 0 20px 0;
      transition: color .3s cubic-bezier(.4, 0, .2, 1);
      color: #000000;
    }
  }

  .form-container {
    width: 100%;
    max-width: 400px;

    .welcome-section {
      text-align: center;
      margin-bottom: 40px;

      .avatar {
        margin-bottom: 20px;
      }

      .welcome-title {
        font-size: 24px;
        font-weight: 600;
        color: #303133;
        margin: 0;
      }
    }

    .login-form {
      .form-input {
        height: 50px;
        margin-bottom: 20px;

        :deep(.el-input__inner) {
          height: 50px;
          line-height: 50px;
          border-radius: 8px;
          border: 1px solid #dcdfe6;
          
          &:focus {
            border-color: #409eff;
          }
        }
      }

      .form-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        .forgot-link {
          font-size: 14px;
        }
      }

      .login-button {
        width: 100%;
        height: 50px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 30px;
      }
    }

    .signup-section {
      text-align: center;
      margin-bottom: 30px;

      .signup-text {
        color: #909399;
        font-size: 14px;
        margin-right: 5px;
      }

      .signup-link {
        font-size: 14px;
      }
    }

    .divider {
      text-align: center;
      margin: 30px 0;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        background: #dcdfe6;
      }

      .divider-text {
        background: white;
        padding: 0 20px;
        color: #909399;
        font-size: 14px;
        position: relative;
      }
    }

    .social-login {
      display: flex;
      justify-content: center;
      gap: 20px;

      .social-item {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
      }
    }
  }
}

/* 响应式设计 */
//@media (max-width: 1024px) {
//  .login-container {
//    flex-direction: column;
//  }
//
//  .login-left {
//    min-height: 40vh;
//    padding: 40px;
//
//    .illustration {
//      display: none;
//    }
//  }
//
//  .login-right {
//    padding: 40px 20px;
//  }
//}
//
//@media (max-width: 768px) {
//  .login-left {
//    padding: 30px 20px;
//
//    .hero-section .hero-title {
//      font-size: 36px;
//    }
//  }
//
//  .login-right {
//    padding: 30px 20px;
//
//    .form-container {
//      max-width: 100%;
//    }
//  }
//}
</style> 