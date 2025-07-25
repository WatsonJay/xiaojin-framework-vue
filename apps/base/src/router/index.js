import { createRouter, createWebHistory } from 'vue-router'

// 导入组件
import Layout from '../layout/index.vue'
import app from "../App.vue";

// 定义基础框架路由
export const constantsRouteMap = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      hidden: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    name: 'Login',
    meta: {
      hidden: true
    }
  },
  // 可以在这里添加更多路由
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/Error/404.vue'),
    meta: {
      title: '404'
    }
  }
]

// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes: constantsRouteMap,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRoutes = (app) => {
  app.use(router)
}
export default router 