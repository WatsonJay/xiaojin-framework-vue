import { createApp } from 'vue'
import App from './App.vue'
import { setupRoutes } from './router'
import { setupElementPlus } from './plugins/elementPlus'

import "@/styles/index.less"
import "@/styles/tailwind.css"

const setupAll = async () => {
  const app = createApp(App)

  setupElementPlus(app)

  setupRoutes(app)

  app.mount('#app')
}

setupAll()