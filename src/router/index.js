// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// 导入视频上传组件
import VideoUpload from '../views/videoUpLoad.vue'
// 可选：新增一个首页（方便演示跳转）

const routes = [
  // 首页路由
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
  //视频上传页面路由（核心）
  {
    path: '/upload',
    name: 'VideoUpload',
    component: () => import("@/views/videoUpLoad.vue")
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite环境变量，适配不同部署路径
  routes
})

export default router