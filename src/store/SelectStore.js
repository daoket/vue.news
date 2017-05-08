export default {
  state: {
    page: 1,
    banners: [],
    newsDate: [],
//  loadBtn: false,
//  requestStatus: true,
//  loadAnimation: true,
    newsUrl: 'https://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd&needContent=0&needHtml=1&page='
  },
  actions: {
    // axios异步请求函数
    requestData ({commit, state}, url) {
      let self = this
      self.$axios({
        method: 'get',
        url: url
      })
      .then(function (res) {
        let data = res.data.showapi_res_body.pagebean.contentlist
        if (data.length > 2) {
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
          // 数据请求成功显示加载更多按钮
        } else {
          self.loadAnimation = false
          alert('没有更多数据了')
          return false
        }
        self.loadBtn = true
        self.loadAnimation = false
      })
    }
  }
}
