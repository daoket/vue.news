<template>
  <div class="select">
    <div class="banner">
      <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for='img in banners' :key="img.channelId">
          <img :src="setBannerSrc(img)"/>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div v-show='loadBtn' class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!--加载动画-->
    <div class="spinner" v-show='loadAnimation'></div>
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='news in newsDate'>
          <a href="javascript: void(0)" class="new" :key='news.channelId'>
            <img v-lazy='news.imageurls[0].url' :src="setNewSrc(news.imageurls[0].url)"/>
            <div class="intro">
              <h4>{{news.title}}</h4>
              <p><span>{{news.source}}</span> | <span>{{news.pubDate}}</span></p>
            </div>
          </a>
        </div>
        <button class="loadMore" @click='loadMoreBtn' v-show='loadBtn'>{{loadBtnText}}</button>
      </div>
      <div class="fail" v-else>{{failMessage}}</div>
    </section>
  </div>
</template>

<script>
// 导入轮播图组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// 导入vuex
import { mapState } from 'vuex'
export default {
  name: 'select',
  data () {
    return {
      banners: [],
      newsDate: [],
      loadBtn: false,
      requestStatus: true,
      loadAnimation: true,
      page: 1,
      newsUrl: 'https://route.showapi.com/109-35?showapi_appid=34477&showapi_sign=cfa5957a730f43d38886bd16469b2a86&channelId=5572a108b3cdc86cf39001cd&needContent=0&needHtml=1&page=',
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      }
    }
  },
  computed: {
    ...mapState({
      failMessage: state => state.SelectStore.failMessage,
      loadBtnText: state => state.SelectStore.loadBtnText
    })
  },
  created: function () {
    this.requestData(this.newsUrl + this.page)
    console.log('叩首为梦 码梦为生！')
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
    // axios异步请求函数
    requestData (url) {
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
              self.newsDate.push(data[i])
            }
          }
          for (let i = 0; i < 4; i++) {
            if (self.banners.length < 4) {
              self.banners.push(self.newsDate[i].imageurls[0].url)
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
    },
    loadMoreBtn () {
      let self = this
      self.page++
      self.loadAnimation = true
      self.requestData(self.newsUrl + self.page)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus">
.select{
  background: #fff;
  .swiper-wrapper{
    height: 200px;
    .swiper-slide img{
      width: 100%;
      height: 200px;
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
