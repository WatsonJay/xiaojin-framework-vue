/*
 * @Description: 
 * @Author:  Jaywatson
 * @Date: 2025/7/30 14:19
 */

import { createPinia } from 'pinia'
import { createPersistedState} from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(createPersistedState({
  storage: localStorage,
  auto: true
}))

export const setupStore = (app) => {
  app.use(store)
}

export { store }