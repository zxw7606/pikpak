import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  console.log(mode)
  return {
    // base: mode === 'development' ? '' : '/pikpak',
    base: '',    
    plugins: [vue()],
    server: {
      proxy: {
        '/v1/pages': {
          target: 'https://api.notion.com',
          changeOrigin: true,
        }
      }
    }
  }
})
