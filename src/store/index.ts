/**
 * @author: daoket
 * @description 导入需要的store
 */
import { createStore } from 'vuex'
import HomeStore from './HomeStore'
import PointStore from './PointStore'
import AuthorStore from './AuthorStore'
import MenuStore from './MenuStore'
import HeadStore from './HeadStore'

export default createStore({
  state: {
    slogan: '叩首为梦 码梦为生！',
    historyLength: 0
  },
  mutations: {
    /*
     * @desc 记录路由切换次数
     * @arg {object} state 状态
     */
    updateHistoryLength (state) {
      state.historyLength++
    }
  },
  actions: {
    updateHistoryLength ({commit}) {
      commit('updateHistoryLength')
    }
  },
  modules: {
    HomeStore,
    PointStore,
    AuthorStore,
    MenuStore,
    HeadStore
  }
})
