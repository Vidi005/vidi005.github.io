import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    })
  ]
})
