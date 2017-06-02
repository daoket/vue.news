import Vue from 'vue'
import Vuex from 'vuex'

import SelectStore from './SelectStore'
import PointStore from './PointStore'
import AuthorStore from './AuthorStore'
import MenuStore from './MenuStore'
import HeadStore from './HeadStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slogan: '叩首为梦 码梦为生！',
    historyLength: 0
  },
  mutations: {
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
    SelectStore,
    PointStore,
    AuthorStore,
    MenuStore,
    HeadStore
  }
})
