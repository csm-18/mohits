import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This points directly to your Spring Boot resources folder
    outDir: '../src/main/resources/static',
    emptyOutDir: true, // Automatically clears old files before rebuilding
  },
  server: {
    // Force Vite to run on the IPv4 loopback address
    host: '127.0.0.1',
    port: 5173,
    // intercept frontend API requests and pass them to Spring Boot
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})