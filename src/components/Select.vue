<template>
  <div class="select">
    <div class="banner">
      <div class="box">
        <img v-for='img in imgs' class="img" :src="setBannerSrc(img.src)"/>
      </div>
      <ul class="num">
      	<li v-for='i in 4'></li>
      </ul>
    </div>
    <div class="spinner"></div>
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='n in newsDate'>
          <a href="javascript: void(0)" class="new">
            <img :src="setNewSrc(n.imageurls[0].url)"/>
            <div class="intro">
              <h4>{{n.title}}</h4>
              <p><span>{{n.source}}</span> | <span>{{n.pubDate}}</span></p>
            </div>
          </a>
        </div>
        <button class="loadMore" v-show='loadStatus'>{{loadMore}}</button>
      </div>
      <div class="fail" v-else>{{failMsg}}</div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'select',
  data () {
    return {
      imgs: [{
        src: require('../assets/select/a.jpg')
      }, {
        src: require('../assets/select/b.jpg')
      }, {
        src: require('../assets/select/c.jpg')
      }, {
        src: require('../assets/select/d.jpg')
      }],
      newsDate: [],
      requestStatus: true,
      loadStatus: false,
      loadMore: '点击加载更多',
      failMsg: '~~~~(>_<)~~~~， 请求到数据失败!',
      newsUrl: 'https://route.showapi.com/109-35?page=',
      page: 1,
      params: '&needContent=0&needHtml=1&showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd'
    }
  },
  created: function () {
    // 请求数据
    this.requestData(this.newsUrl + this.page + this.params)
    console.log('叩首为梦 码梦为生！')
  },
  mounted () {
    let startX
    let endX
    let i = 0
    let self = this
    let timer = null
    let imgWidth = $(window).width()
    let eventType = 'ontoucstart' in document.documentElement ? 'touchstart' : 'click'
    $('.box img').css('width', imgWidth + 'px')
    $('.box').css('width', imgWidth * 4 + 'px')
    document.addEventListener('touchstart', touchstartHandler, false)
    document.addEventListener('touchmove', touchmoveHandler, false)
    document.addEventListener('touchend', touchendHandler, false)
    function touchstartHandler (e) {
      stop()
      startX = e.touches[0].pageX
    }
    function touchmoveHandler (e) {
      endX = e.touches[0].pageX
    }
    function touchendHandler (e) {
      (startX - endX) > 120 ? next() : prev()
      setTimeout(play, 2000)
    }
    play()
    function next () {
      if (i < 3) {
        i++
        $('.banner .box').css('transform', 'translateX(' + -imgWidth * i + 'px)')
        $($('.banner .num li')[i]).addClass('active').siblings().removeClass('active')
      } else {
        return false
      }
    }
    function prev () {
      if (i > 0) {
        i--
        $('.banner .box').css('transform', 'translateX(' + -imgWidth * i + 'px)')
        $($('.banner .num li')[i]).addClass('active').siblings().removeClass('active')
      } else {
        return false
      }
    }
    function play () {
      stop()
      timer = setInterval(function () {
        if (i < 3) {
          i++
          $('.banner .box').css('transform', 'translateX(' + -imgWidth * i + 'px)')
          $($('.banner .num li')[i]).addClass('active').siblings().removeClass('active')
        } else {
          i = -1
        }
      }, 2000)
    }
    function stop () {
      clearInterval(timer)
    }
    // 点击加载更多
    $('.loadMore').on(eventType, function () {
      self.page++
      $('.spinner').show()
      self.requestData(self.newsUrl + self.page + self.params)
    })
  },
  methods: {
    // 设置轮播图
    setBannerSrc (src) {
      return src
    },
    // 设置新闻图片
    setNewSrc (url) {
      return url
    },
    removeTimer () {
      clearInterval(this.timer)
    },
    // fetch异步请求函数
    requestData (url) {
      let self = this
      fetch(url)
        .then(function (res) {
          return res.status
                 ? Promise.resolve(res)
                 : new Error(Promise.reject(res))
        })
        .then(function (res) {
          return res.json()
        })
        .then(function (res) {
          let data = res.showapi_res_body.pagebean.contentlist
          $('.spinner').hide()
          for (var i = 0; i < data.length; i++) {
            if (data[i].imageurls[0]) {
              self.newsDate.push(data[i])
            }
          }
          self.loadStatus = true
        })
    }
  }
}
</script>

<style lang="stylus">
.select{
  background: #fff;
  .banner{
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    .box{
      height: 200px;
      position: relative;
      display: flex;
      transition: all 0.5s;
    }
    .img{
      height: 200px;
      transition: all 1s;
    }
    .num{
      display: flex;
      list-style: none;
      position: absolute;
      bottom: 10px;
      right: 10px;
      .active{
        background: #058 !important;
      }
      li{
        height: 10px;
        width: 10px;
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
        margin: 10px;
      }
    }
  }
  .news{
    min-height: 500px;
    padding: 0 10px;
    .new{
      height: 100px;
      color: #262627;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      img{
        height: 80px;
        width: 100px;
      }
      .intro{
        width: 80%;
        height: 80px;
        display: flex;
        padding-left: 10px;
        flex-direction: column;
        justify-content: space-between;
        h4{
          font-size: 20px;
          line-height: 1.2;
          font-weight: bold;
          overflow: hidden;
          display: -webkit-box;
          word-break: break-all;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        p{
          font-size: 13px;
          color: #666;
        }
      }
    }
    .loadMore{
      height: 50px;
      width: 100%;
      color: #545454;
      background: #eee;
      text-align: center;
      line-height: 50px;
      font-size: 13px;
      border: none;
      border-radius: 0;
      outline: none;
      margin-bottom: 10px;
    }
    .fail{
      display: flex;
      min-height: 300px;
      align-items: center;
      justify-content: center;
    }
  }
}
/*加载动画*/
.spinner {
  position: fixed;
  left: 40%;
  bottom: 10%;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  background-color: #69C61D
 
  border-radius: 100%; 
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;
}
 
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
 
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
</style>
