import { createApp } from 'vue'
import App from './App.vue'
import { setupRoutes } from './router'

const setupAll = async () => {
  const app = createApp(App)

  setupRoutes(app)

  app.mount('#app')
}
