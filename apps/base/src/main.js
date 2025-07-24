import { createApp } from 'vue'
import App from './App.vue'
// 引入微服务
import { registerMicroApps } from "qiankun";

registerMicroApps([])

createApp(App).mount('#app')
