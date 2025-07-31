import { createApp } from 'vue'
import App from './App.vue'
import { setupRoutes } from './router'
import { setupElementPlus } from './plugins/elementPlus'
import { setupStore } from '@/stores/index.js'
import { setupI18n } from "@/plugins/vueI18n/index.js";

import "@/styles/index.less"
import "@/styles/tailwindcss.css"

const setupAll = async () => {
  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  setupElementPlus(app)

  setupRoutes(app)

  app.mount('#app')
}

setupAll()