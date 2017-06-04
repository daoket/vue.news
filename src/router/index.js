import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Select from '@/components/Select'
import Point from '@/components/Point'
import Author from '@/components/Author'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  hashbang: true, // 将路径格式化为#!开头
  history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  /**
   * @desc 路由配置
   */
  routes: [
    {
      path: '/select',
      component: Select
    }, {
      path: '/point',
      component: Point
    }, {
      path: '/author',
      component: Author,
      meta: { requiresAuth: true }
    }, {
      path: '/*',
      component: Select
    }
  ]
})
/**
 * @desc 全局监听路由变化
 */
router.beforeEach((to, from, next) => {
  store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
  next()
})

export default router
