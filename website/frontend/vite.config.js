import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['dev.jimhasaburger.com'],
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
