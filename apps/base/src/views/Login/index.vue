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
        <!-- 动态切换 -->
        <component :is="formComponent[currentForm]"></component>
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
import { useLocaleStoreWithOut} from '@/stores/modules/locale.js'
import {reactive, ref} from "vue";
import loginForm from "@/views/Login/components/LoginForm.vue";
const localeStore = useLocaleStoreWithOut()

const currentForm = ref("loginForm")
const formComponent = reactive({
  'loginForm': loginForm,
})
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