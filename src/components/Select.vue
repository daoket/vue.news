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
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='n in newsDate'>
          <a href="#" class="new">
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
    let num = 0
    let self = this
    let time = 3000
    let timer = null
    let imgs = document.querySelectorAll('.select .box img')
    let nums = document.querySelectorAll('.select .num li')
    let len = imgs.length - 1
    function carousel () {
      num === len ? num = 0 : num++
      changeImg(imgs, nums, num)
      clickShow()
    }
    $('.banner').hover(stop, play)
    // 点击切换图片
    function clickShow () {
      for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click', function (e) {
          let activeIndex = getIndex(nums, e.target)
          changeImg(imgs, nums, activeIndex)
        })
      }
    }
    // 添加动画
    function play () {
      timer = setInterval(function () {
        carousel()
      }, time)
    }
    // 清除动画
    function stop () {
      clearInterval(timer)
    }
    // 切换图片
    function changeImg (arr1, arr2, num) {
      for (let i = 0; i < arr1.length; i++) {
        if (num === i) {
          $(arr1[i]).show()
          arr2[i].className = 'active'
        } else {
          $(arr1[i]).hide()
          arr2[i].className = ''
        }
      }
    }
    // 得到特定对象下标
    function getIndex (arr, obj) {
      return [].indexOf.call(arr, obj)
    }
    play()
    // 点击加载更多
    $('.loadMore').on('click', function () {
      self.page++
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
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: flex-start;
    }
    .img{
      height: 200px;
      width: 100%;
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
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);;
    }
    .fail{
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
