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
    <svg v-show='rocket' class="icon goTop" @click='goPageTop' aria-hidden="true">
      <use xlink:href="#icon-0028"></use>
    </svg>
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='news in newsDate' :id="news.id">
          <a href="javascript: void(0)" class="new" :key='news.channelId'>
            <img v-lazy='news.imageurls[0].url' :src="setNewSrc(news.imageurls[0].url)"/>
            <div class="intro">
              <h4>{{news.title}}</h4>
              <p><span>{{news.source}}</span> | <span>{{news.pubDate}}</span></p>
            </div>
          </a>
        </div>
        <button class="loadMore" @click='loadMoreBtn' v-show='loadBtn'>点击加载更多</button>
      </div>
      <div class="fail" v-else>~~~~(>_<)~~~~， 请求到数据失败!</div>
    </section>
  </div>
</template>

<script>
// 导入轮播图组件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// 导入vuex
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'select',
  data () {
    return {
      rocket: false,
      requestStatus: true,
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
      page: state => state.SelectStore.page,
      newsUrl: state => state.SelectStore.newsUrl,
      banners: state => state.SelectStore.banners,
      newsDate: state => state.SelectStore.newsDate,
      loadBtn: state => state.SelectStore.loadBtn,
      loadAnimation: state => state.SelectStore.loadAnimation
    })
  },
  created: function () {
    this.askNews(this.newsUrl + this.page)
    let _this = this
    window.onscroll = function () {
      let leaveTop = document.body.scrollTop
      if (leaveTop > 600) {
        _this.rocket = true
      } else {
        _this.rocket = false
      }
    }
    console.log('叩首为梦 码梦为生！')
  },
  methods: {
    ...mapActions([
      'askNews', 'setSrc'
    ]),
    ...mapMutations([
      'loadMore'
    ]),
    setBannerSrc (src) {  // 设置轮播图
      return src
    },
    setNewSrc (url) {  // 设置新闻图片
      return url
    },
    loadMoreBtn () { // 加载更多
      this.loadMore()
      this.askNews(this.newsUrl + this.page)
    },
    goPageTop () {
      document.body.scrollTop = 0
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
.goTop{
  color: #50BFFF;
  position: fixed;
  bottom: 60px;
  right: 30px;
  z-index: 9999;
  cursor: pointer;
  width: 60px;
  height: 60px;
  transition: all 1s;
  transform: scale(0.5);
}
.goTop:active{
  color: #C40000;
  transform: scale(1);
}
</style>
