<template>
  <div class="login-container">
    <!-- 左侧插画区域 -->
    <div class="login-left">
      <div class="login-left-logo">
        <img src="@/assets/Logo.png">
        <span>Xiaojin Admin</span>
      </div>

      <div class="login-left-title">
        {{ $t('login.title') }}
      </div>

      <div class="login-left-text">
        {{ $t('login.text') }}
      </div>

      <div class="login-left-pic">
        <img src="@/assets/Login/login_left.png" />
      </div>
    </div>

    <!-- 右侧登录表单区域 -->
    <div class="login-right">
      <div class="shadow-xl login-right-form">
        <!--  -->
      </div>
      <div class="change-language">
        <el-select v-model="$i18n.locale" placeholder="Select" style="width: 100px" @change="changeLanguage">
          <el-option v-for="item in localeStore.getLocaleMap" :label="item.name" :value="item.lang"/>
        </el-select>
      </div>
    </div>


  </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'
import { ElMessage } from 'element-plus'
import { User, Key } from '@element-plus/icons-vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStoreWithOut} from '@/stores/modules/locale.js'

const { t, locale } = useI18n({ useScope: 'global' })
const loginFormRef = ref()
const loading = ref(false)
const avatar = ref(new URL('@/assets/Login/default_avatar.png', import.meta.url).href)
const localeStore = useLocaleStoreWithOut()

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

//切换语言
const changeLanguage = (value) => {
  localeStore.setCurrentLocale({'lang': value})
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
  }

  .change-language {
    position: fixed;
    top: 20px;
    right: 30px;
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