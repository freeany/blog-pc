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
import manyRegister from '@/components/common/index'
// const install = 
Vue.use(function (Vue, opts = {}) {
  manyRegister.forEach(item => {
    Vue.component(item.default.name, item.default)
  })
})

// 批量注册组件
// import comp from '@/utils/utils/registerCom'
// Vue.use(comp)
new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})