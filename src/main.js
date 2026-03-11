import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from 'vant';
import App from './App.vue'
import router from './router'

const app = createApp(App)
// 1. 只创建一次 Pinia 实例
const pinia = createPinia()
// 2. 只注入一次 Pinia 实例（核心修复：删掉重复的 app.use(createPinia())）
app.use(pinia)
// app.use(createPinia())
app.use(router)
// 补充：Vant Icon 组件也需要 use 注册（你之前漏了）
app.use(Icon)

app.mount('#app')