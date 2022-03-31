<template>
  <div class="home">
    <div class="banner">
      <Swiper />
    </div>
    <!--加载动画-->
    <div class="spinner" v-show='loadAnimation'></div>
    <transition name='fade' mode='out-in'>
      <svg v-show='rocket' class="icon goTop" @click='goPageTop' t="1648682894661" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1545" width="64" height="64"><path d="M395.264 304.128c-70.656 92.16-145.408 194.56-189.44 304.128-5.12 12.288 6.144 23.552 18.432 20.48L358.4 590.848M628.736 304.128c70.656 92.16 145.408 194.56 189.44 304.128 5.12 12.288-6.144 23.552-18.432 20.48L665.6 590.848" fill="#F79839" p-id="1546"></path><path d="M676.864 711.68H345.088C318.464 624.64 312.32 532.48 331.776 443.392c22.528-101.376 70.656-197.632 140.288-277.504l7.168-8.192c16.384-19.456 46.08-19.456 62.464 0l7.168 8.192c70.656 79.872 117.76 176.128 140.288 277.504 20.48 89.088 14.336 181.248-12.288 268.288z" fill="#004FFF" p-id="1547"></path><path d="M467.968 675.84c-51.2 0-95.232-37.888-102.4-88.064-8.192-60.416-6.144-120.832 6.144-180.224 21.504-95.232 64.512-185.344 126.976-262.144-8.192 2.048-15.36 6.144-20.48 12.288l-7.168 8.192C402.432 245.76 354.304 340.992 331.776 443.392 312.32 532.48 318.464 624.64 345.088 711.68h331.776c4.096-12.288 7.168-23.552 10.24-35.84H467.968z" fill="#1D6FFF" p-id="1548"></path><path d="M381.952 721.92h236.544V778.24H381.952z" fill="#004FFF" p-id="1549"></path><path d="M600.064 786.432H401.408l99.328 94.208z" fill="#FBB03B" p-id="1550"></path><path d="M430.08 427.008a80.896 79.872 0 1 0 161.792 0 80.896 79.872 0 1 0-161.792 0Z" fill="#E9F3FB" p-id="1551"></path></svg>
    </transition>
    <section class="news">
      <div v-if='requestStatus'>
        <div v-for='(news, index) in newsDate' :key='index' :id="news.id">
          <a href="javascript: void(0)" class="new" :key='news.channelId'>
            <img :src="setNewSrc(news.img)"/>
            <div class="intro">
              <h4>{{news.title}}</h4>
              <p><span>{{news.source}}</span> | <span>{{news.pubDate}}</span></p>
            </div>
          </a>
        </div>
        <button class="loadMore" @click='loadMoreBtn' v-show='loadBtn'>点击加载更多</button>
      </div>
      <div class="fail" v-else>/(ㄒoㄒ)/~~， 请求到数据失败!</div>
    </section>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Swiper } from '@/components'

export default {
  data () {
    return {
      rocket: false,
      requestStatus: true,
    }
  },
  setup() {
    const store = useStore()

    return {
      page: computed(() => store.state.HomeStore.page),
      newsUrl: computed(() => store.state.HomeStore.newsUrl),
      newsDate: computed(() => store.state.HomeStore.newsDate),
      loadBtn: computed(() => store.state.HomeStore.loadBtn),
      pathName: computed(() => store.state.HomeStore.pathName),
      loadAnimation: computed(() => store.state.HomeStore.loadAnimation),

      loadMore: () => store.commit('loadMore'),
      askNews: (url: string) => store.dispatch('askNews', url),
      setSrc: () => store.commit('setSrc'),
    }
  },
  created: function () {
    this.askNews(this.newsUrl + this.page) // 第一次加载请求数据
    let _this = this
    /**
     * @desc 判断是否显示回到顶部的火箭图标
     */
    window.onscroll = function () {
      const leaveTop = document.body.scrollTop || window.pageYOffset
      if (leaveTop > 600) {
        _this.rocket = true
      } else {
        _this.rocket = false
      }
    }
    console.log(`%c ${(this as any).$store.state.slogan}`,"font-size: 22px;color:#00BBEE", "Copyright © 2022");
  },
  methods: {
    /**
     * @desc 设置新闻图片地址
     */
    setNewSrc (url: string) {
      return url
    },
    /**
     * @desc 加载更多
     */
    loadMoreBtn () {
      this.loadMore()
      this.askNews(this.newsUrl + this.page)
    },
    /**
     * @desc 回到顶部
     */
    goPageTop () {
      window.scrollTo(0, 0)
    }
  },
  components: {
    Swiper,
  }
}
</script>

<style lang="scss" scoped>
.home{
  background: #fff;
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
  bottom: 40%;
  width: 80px;
  height: 80px;
  margin: 50px auto;
  background-color: #69C61D;
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
  bottom: 40px;
  right: 20px;
  z-index: 9999;
  cursor: pointer;
  width: 60px;
  height: 60px;
  transition: all 1s ease;
  transform: scale(0.6);
}
.goTop:active{
  color: #C40000;
  transform: scale(1);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.tip{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  a{
    color: #19C8A9;
  }
  span{
    margin-bottom: 10px;
  }
}
</style>
