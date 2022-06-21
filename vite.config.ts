import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// 找不到模块“path”或其相应的类型声明 或者 找不到名称“__dirname 安装 @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 此处也可设置直角、边框色、字体大小等
          'primary-color': '#645AFF'
        },
        javascriptEnabled: true
      }
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  }
})
