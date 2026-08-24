import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/barberia-el-canario/',
  plugins: [react()],
})
