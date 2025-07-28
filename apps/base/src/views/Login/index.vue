<template>
  <div class="login-container">
    <!-- 左侧插画区域 -->
    <div class="login-left">
      <div class="logo-section">
        <div class="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#409EFF"/>
            <path d="M8 16L14 22L24 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="logo-text">Naive Admin Plus</span>
        </div>
      </div>
      
      <div class="hero-section">
        <h1 class="hero-title">开箱即用</h1>
        <p class="hero-description">颜值与实用并存，中后台前端框架一站式解决方案</p>
      </div>
      
      <div class="illustration">
        <div class="illustration-content">
          <div class="person">
            <div class="person-head"></div>
            <div class="person-body"></div>
            <div class="person-arm"></div>
          </div>
          <div class="chart">
            <div class="chart-bars">
              <div class="bar bar-1"></div>
              <div class="bar bar-2"></div>
              <div class="bar bar-3"></div>
            </div>
          </div>
          <div class="ok-badge">OK</div>
          <div class="notification">
            <div class="notification-dot"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧登录表单区域 -->
    <div class="login-right">
      <div class="form-container">
        <div class="welcome-section">
          <div class="avatar">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#409EFF"/>
              <path d="M24 28C27.866 28 31 24.866 31 21C31 17.134 27.866 14 24 14C20.134 14 17 17.134 17 21C17 24.866 20.134 28 24 28Z" fill="white"/>
              <path d="M24 30C18.477 30 14 34.477 14 40H34C34 34.477 29.523 30 24 30Z" fill="white"/>
            </svg>
          </div>
          <h2 class="welcome-title">欢迎来到 Naive Admin Plus! 👋</h2>
        </div>

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
              placeholder="admin"
              prefix-icon="User"
              class="form-input"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="••••••"
              prefix-icon="Lock"
              show-password
              class="form-input"
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

const loginFormRef = ref()
const loading = ref(false)

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
  display: flex;
  min-height: 100vh;
  background: #f5f5f5;
}

.login-left {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px;
  color: white;
  position: relative;
  overflow: hidden;

  .logo-section {
    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 40px;

      .logo-text {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }

  .hero-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;

    .hero-title {
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 20px 0;
      line-height: 1.2;
    }

    .hero-description {
      font-size: 16px;
      opacity: 0.9;
      line-height: 1.6;
      margin: 0;
    }
  }

  .illustration {
    position: absolute;
    right: 60px;
    bottom: 60px;
    width: 300px;
    height: 300px;

    .illustration-content {
      position: relative;
      width: 100%;
      height: 100%;

      .person {
        position: absolute;
        bottom: 50px;
        left: 50px;

        .person-head {
          width: 60px;
          height: 60px;
          background: #2c3e50;
          border-radius: 50%;
          margin-bottom: 10px;
        }

        .person-body {
          width: 80px;
          height: 100px;
          background: #3498db;
          border-radius: 20px;
          position: relative;
        }

        .person-arm {
          position: absolute;
          top: 20px;
          right: -30px;
          width: 50px;
          height: 15px;
          background: #3498db;
          border-radius: 10px;
          transform: rotate(-30deg);
        }
      }

      .chart {
        position: absolute;
        top: 50px;
        right: 80px;
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);

        .chart-bars {
          display: flex;
          align-items: end;
          gap: 8px;

          .bar {
            width: 12px;
            border-radius: 6px;
            
            &.bar-1 {
              height: 30px;
              background: #e0e6ed;
            }
            
            &.bar-2 {
              height: 50px;
              background: #e0e6ed;
            }
            
            &.bar-3 {
              height: 40px;
              background: #2ecc71;
            }
          }
        }
      }

      .ok-badge {
        position: absolute;
        bottom: 120px;
        right: 50px;
        background: #2ecc71;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 600;
      }

      .notification {
        position: absolute;
        bottom: 30px;
        left: 30px;
        width: 40px;
        height: 40px;
        background: #3498db;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        .notification-dot {
          width: 8px;
          height: 8px;
          background: #e74c3c;
          border-radius: 50%;
          position: absolute;
          top: 5px;
          right: 5px;
        }
      }
    }
  }
}

.login-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 60px;

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