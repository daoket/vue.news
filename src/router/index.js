import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select'
import Point from '@/components/Point'
import Author from '@/components/Author'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  hashbang: true, // 将路径格式化为#!开头
  history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  // 路由配置
  routes: [
    {
      path: '/select',
      component: Select
    }, {
      path: '/select',
      component: Select
    }, {
      path: '/point',
      component: Point
    }, {
      path: '/author',
      component: Author
    }, {
      path: '/*',
      component: Select
    }, {
      path: '/',
      redirect: '/select'
    }
  ]
})

export default router
