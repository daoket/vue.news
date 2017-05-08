import Vue from 'vue'
import Vuex from 'vuex'

import SelectStore from './SelectStore'
import PointStore from './PointStore'
import AuthorStore from './AuthorStore'
import MenuStore from './MenuStore'
import HeadStore from './HeadStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SelectStore,
    PointStore,
    AuthorStore,
    MenuStore,
    HeadStore
  }
})
