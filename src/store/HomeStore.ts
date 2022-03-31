import axios from 'axios'

interface SelectState {
  page: number;
  data: any[];
  newsDate: any[];
  banners: any[];
  searchNews: any[];
  loadBtn: boolean;
  loadAnimation: boolean;
  newsUrl: string;
}

export default {
  state: {
    page: 1,
    data: [],
    newsDate: [],
    banners: [],
    searchNews: [],
    loadBtn: false,
    loadAnimation: true,
    // newsUrl: 'https://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd&needContent=0&needHtml=1&page='
    newsUrl: 'https://service-igtlr07d-1253811576.sh.apigw.tencentcs.com/release/news-mock'
  },
  mutations: {
    /**
     * @desc 加载新闻
     */
    loadNews(state: SelectState) {
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
    loadMore(state: SelectState) {
      state.page++
      state.loadAnimation = true
    },
    updatePathName(state: any, newPathName: string) {
      state.pathName = newPathName
    }
  },
  actions: {
    /**
     * @desc axios异步请求函数 类似jquery的ajax方法
     */
    askNews ({commit, state}: any, url: string) {
      axios({
        method: 'get',
        url: url
      })
        .then((res) => {
          if (res.data.showapi_res_code === 0) {
            let data = res.data.showapi_res_body.pagebean.contentlist
            state.data = data
            for (let i in data) {
              state.searchNews.push({title: data[i].title, id: data[i].id})
            }
          } else {
            const tips = document.createElement('p');
            tips.className = 'tip';
            tips.innerHTML = `<span>接口请求已达上限 /(ㄒoㄒ)/~~！！！</span>
              <span>选择和AI聊天，缓解失望的心情吧：</span>
              <a href="http://lx.openspeech.cn/auth/project/ai_niu/index.html">快来和我聊天！</a>`
            document.querySelector('.news')?.appendChild(tips)
          }
          commit('loadNews')
        })
    }
  }
}
