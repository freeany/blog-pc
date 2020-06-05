import Vue from 'vue'
import App from './App'
import router from './router/index'

// 重置的文件
import './static/normalize.css'
// 引入公共的scss
import './static/common.scss'
// 引入incontfont
import './static/iconfont.scss'
// 引入resize
import './utils/resizeRem'

// 批量注册组件
import comp from '@/utils/utils/registerCom'
Vue.use(comp)
new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})