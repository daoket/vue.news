import axios from 'axios'
import $ from 'jquery'
export default {
  state: {
    page: 1,
    data: [],
    newsDate: [],
    banners: [],
    searchNews: [],
    loadBtn: false,
    loadAnimation: true,
    newsUrl: 'https://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd&needContent=0&needHtml=1&page='
  },
  mutations: {
    /**
     * @desc 加载新闻
     */
    loadNews (state) {
      let data = state.data
      if (data.length > 2) { // 判断数据是否存在
        for (var i = 0; i < data.length; i++) {
          if (data[i].imageurls[0]) {
            state.newsDate.push(data[i])
          }
        }
        for (let i = 0; i < 4; i++) {
          if (state.banners.length < 4) {
            state.banners.push(state.newsDate[i].imageurls[0].url)
          }
        }
      } else {
        state.loadAnimation = false
        console.log('没有更多数据了')
        return false
      }
      // 数据请求成功显示加载更多按钮
      state.loadBtn = true
      state.loadAnimation = false
    },
    /**
     * @desc 点击加载更多
     */
    loadMore (state) {
      state.page++
      state.loadAnimation = true
    },
    updatePathName (state, newPathName) {
      state.pathName = newPathName
    }
  },
  actions: {
    /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
    askNews ({commit, state}, url) {
      axios({
        method: 'get',
        url: url
      })
      .then((res) => {
        if (res.data.showapi_res_code !== -2) {
          let data = res.data.showapi_res_body.pagebean.contentlist
          state.data = data
          for (let i in data) {
            state.searchNews.push({title: data[i].title, id: data[i].id})
          }
        } else {
          var tips = `<p class="tip">
            <span>新闻接口已经超出请求上限 /(ㄒoㄒ)/~~！！！</span>
            <span>选择和图灵机器人聊天，缓解失望的心情吧：</span>
            <a href="http://lx.openspeech.cn/auth/project/ai_niu/index.html">快来和我聊天！</a>
          </p>`
          $(tips).appendTo('.news')
        }
        commit('loadNews')
      })
    }
  }
}
