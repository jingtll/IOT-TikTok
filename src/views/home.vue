<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
// const goTO = () => {
//   router.push("/upload")
// }
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/counter'

const active = ref(0)
const userStore = useUserStore()
const isLoggedIn = computed(() => userStore.isLoggedIn)

// 处理发布按钮点击 - 跳转到上传页面并自动触发文件选择
const handlePublishClick = () => {
  // 跳转到上传页面
  router.push('/upload')

  // 等待路由切换完成后再触发文件选择
  setTimeout(() => {
    // 调用上传页面的函数来触发文件选择器
    if (window.triggerVideoUploadFileSelect) {
      window.triggerVideoUploadFileSelect()
    }
  }, 100)
}
</script>

<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/video">主页</van-tabbar-item>
      <!-- 修改后的发布按钮 - 添加 @click 事件处理并移除路由跳转 -->
      <van-tabbar-item icon="friends-o" @click="handlePublishClick">发布</van-tabbar-item>

      <van-tabbar-item icon="setting-o" to="/my">{{ isLoggedIn ? "我的" : "未登录" }}</van-tabbar-item>
    </van-tabbar>
  </div>
  <!-- <router-link to="/upload">视频上传</router-link> -->
  <!-- <van-button size="large" color="blue" type="primary" @click="goTO" id="upLoadButton">上传视频</van-button> -->
</template>

<style scoped></style>