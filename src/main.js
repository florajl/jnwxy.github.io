import { createApp } from 'vue'
import './style.css'
import './assets/css/swiper.css'
import './assets/js/swiper.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.mount('#app')
