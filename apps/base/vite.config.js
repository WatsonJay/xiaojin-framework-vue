import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [ vue(), tailwindcss() ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
})
