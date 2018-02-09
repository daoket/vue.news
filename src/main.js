// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './style/public.css'

import axios from 'axios' // 处理http请求
import store from './store' // 状态管理
import VueLazyload from 'vue-lazyload' // 懒加载

/**
 * @desc 懒加载配置
 * @author wtniu
 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/error.jpg',
  loading: './assets/loading.gif',
  attempt: 1
})

Vue.prototype.$axios = axios

// 去掉开发环境打印信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
