<template>
  <div class="select">
    <div class="banner" @mouseenter='removeTimer' @mouseout="addTimer">
      <div class="box">
        <img v-for='img in imgs' class="img" :src="setBannerSrc(img.src)"/>
      </div>
      <ul class="num" @mouseenter='changeImg($event)'>
      	<li v-for='i in 4'></li>
      </ul>
    </div>
    <section class="news">
      <div v-for='n in news'>
        <a href="#" class="new">
          <img :src="setNewSrc(n.src)"/>
          <div class="intro">
            <h4>{{n.title}}</h4>
            <p><span>{{n.author}}</span> | <span>{{n.time}}</span></p>
          </div>
        </a>
      </div>
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
      news: [{
        src: require('../assets/select/beijing.jpg'),
        title: '超级重磅！迁都迈出第一步迁都迈出第一步迁都迈出第一步，雄安新区完整投...',
        author: '君临',
        time: '12:36'
      }, {
        src: require('../assets/select/beijing.jpg'),
        title: '超级重磅！迁都迈出第一步迁都迈出第一步迁都迈出第一步，雄安新区完整投...',
        author: '君临',
        time: '12:36'
      }, {
        src: require('../assets/select/beijing.jpg'),
        title: '超级重磅！迁都迈出第一步迁都迈出第一步迁都迈出第一步，雄安新区完整投...',
        author: '君临',
        time: '12:36'
      }, {
        src: require('../assets/select/beijing.jpg'),
        title: '超级重磅！迁都迈出第一步迁都迈出第一步迁都迈出第一步，雄安新区完整投...',
        author: '君临',
        time: '12:36'
      }],
      timer: ''
    }
  },
  mounted () {
    let num = 0
    let oImg = $('.select .box img')
    let len = oImg.length
    let carousel = () => {
      num === len ? num = 0 : num++
      oImg.eq(num).hide().siblings().show()
      $('.num li').eq(num).addClass('active').siblings().removeClass('active')
    }
    this.timer = setInterval(carousel, 1500)
  },
  methods: {
    setBannerSrc (src) {
      return src
    },
    setNewSrc (src) {
      return src
    },
    removeTimer () {
      clearInterval(this.timer)
    },
    addTimer () {
      this.timer
    },
    changeImg (e) {
      clearInterval(this.timer)
      var num = $(e.target).index()
      $(e.target).addClass('active').siblings().removeClass('active')
      $('.select .box img').eq(num).fadeIn().siblings().fadeOut()
    }
  }
}
</script>

<style lang="stylus">
.select{
  background: #fff;
  .banner{
    position: relative;
    .box{
      max-height: 200px;
      overflow: hidden;
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
        background: #058;
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
    padding: 0 10px;
    .new{
      height: 100px;
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
  }
}
</style>
