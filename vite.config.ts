import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {  // 别名配置
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
})
