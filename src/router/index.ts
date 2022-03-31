/**
 * @author: 西风
 * @description 页面路由
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { Home, Point, Author } from '@/views'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/point',
    component: Point
  }, {
    path: '/author',
    component: Author,
    meta: { requiresAuth: true }
  }, {
    path: '/*',
    component: Home
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes,
})

// 全局监听路由变化
router.beforeEach((to, from, next) => {
  store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
  next()
})

export default router
