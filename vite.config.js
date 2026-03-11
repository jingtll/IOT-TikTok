import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    vueDevTools(),
    viteMockServe({
      mockPath: './mock', // Mock 接口文件存放目录
      localEnabled: true, // 开发环境启用 Mock
      prodEnabled: false, // 生产环境禁用 Mock
      supportTs: false, // 非 TS 项目设为 false
      logger: true, // 开启日志，能看到 Mock 接口加载情况（方便排查）
    })
  ],
  server: {
    cors: true,
    proxy: {} // 不要配置/api的代理（否则会优先转发到代理服务器，导致 Mock 失效）
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
