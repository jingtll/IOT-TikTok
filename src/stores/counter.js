import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '', // 从本地恢复
    userInfo: null
  }),

  getters: {
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    // 保存 token 和用户信息
    setToken(token, userInfo = null) {
      this.token = token
      this.userInfo = userInfo
      localStorage.setItem('token', token) // 持久化到本地
    },

    // 清除登录状态（退出登录）
    clearToken() {
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    },

    // 初始化时从本地恢复 token
    initToken() {
      const token = localStorage.getItem('token')
      if (token) {
        this.token = token
      }
    }
  }
})