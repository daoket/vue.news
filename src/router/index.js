import Vue from 'vue'
import Router from 'vue-router'
import Select from '@/components/Select'
import Point from '@/components/Point'
import Author from '@/components/Author'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
    }
  ]
})
