import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// 安装插件方法
import { install } from './core/install'
// 创建实例
const app = createApp(App)
// 插件安装
install(app)
// 实例挂载
app.mount('#app')
