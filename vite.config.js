import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 base: '/cv_Rodolfo_Parada-frontend/',
  plugins: [vue()],
  server: {
    port: 5174,  // Cambia el puerto a 5174
  },
})