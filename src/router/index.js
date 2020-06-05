import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const vueRouter = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      name: 'Home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index')
        },
        {
          path: 'article',
          component: () => import('@/views/article/index')
        }
      ]
    }
  ]
})

export default vueRouter