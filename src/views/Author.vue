<template>
  <section class="author">
    <button class="goHome" @click='goHome'>Home</button>
    <!--<a v-link="home">home</a>-->
    <div class="banner">
      <div v-for='(a, index) in author' :key='index' class="item">
        <div class="msg">
          <img :src="setAutherSrc(a.src)"/>
          <p class="name">{{a.name}}</p>
          <p class="slogan">{{a.slogan}}</p>
        </div>
        <span class="focus" v-if='a.status' @click='a.status = !a.status'>关注</span>
        <span class="focus focused" @click='a.status = !a.status' v-else>已关注</span>
      </div>
    </div>
    <section class="more">
      <div v-for='(o, index) in other' :key='index' class="other">
        <div class="authorMsg">
          <img :src="setOtherSrc(o.src)"/>
          <div class="intro">
            <p class="name">{{o.name}}</p>
            <p class="slogan">{{o.slogan}}</p>
          </div>
        </div>
        <div>
          <span class="focus" v-if='o.status' @click='o.status = !o.status' >关注</span>
          <span class="focus focused" @click='o.status = !o.status' v-else>已关注</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Author',
  setup() {
    const store = useStore()

    return {
      author: computed(() => store.state.AuthorStore.author),
      other: computed(() => store.state.AuthorStore.other),
      pathName: computed(() => store.state.AuthorStore.pathName),
    }
  },
  watch: {
    // '$route': 'fetchData'
  },
  methods: {
    setAutherSrc (src: string) {
      return src
    },
    setOtherSrc (src: string) {
      return src
    },
    // TODO
    // fetchData () {
    //   location.hash = 'home'
    //   console.log(this.$route)
    // },
    goHome () {
      if (history.length) {
        this.$router.go(Number(-(this as any).$store.state.historyLength) + 1)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log(9)
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>

<style lang="scss" scoped>
.author{
  background: #fff;
  border-right: 1px solid #666;
  .banner{
    background: url(@/assets/author/author_banner_bg.jpg);
    .item{
      height: 210px;
      width: 45%;
      margin: 2%;
      color: #fff;
      opacity: 0.9;
      display: inline-block;
      text-align: center;
      background: #2E2E2F;
      .msg{
        display: flex;
        flex-direction: column;
        background: #262627;
        padding: 10px 0;
        justify-content: space-around;
        align-items: center;
        img{
          height: 100px;
          width: 100px;
          border-radius: 50%;
        }
        .name{
          margin: 10px 0;
        }
        .slogan{
          color: #666;
          width: 80%;
          font-size: 13px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .focus{
        width: 80px;
        font-size: 13px;
        display: inline-block;
        padding: 4px 0;
        background: #E94C3D;
        border-radius: 10px;
        cursor: pointer;
        margin: 10px 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .focused{
        background: #262627;
      }
    }
  }
  .more{
    padding: 10px;
    .other{
      height: 100px;
      background: #eee;
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;
      padding: 0 10px;
      align-items: center;
      .authorMsg{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          height: 80px;
          width: 80px;
          border-radius: 50%;
        }
        .intro{
          height: 40px;
          margin: 0 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .slogan{
            font-size: 13px;
            color: #666;
          }
        }
      }
      .focus{
        display: inline-block;
        width: 80px;
        color: #fff;
        cursor: pointer;
        font-size: 13px;
        text-align: center;
        padding: 5px 0;
        background: #D5483A;
        border-radius: 15px;
        margin-left: 10px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .focused{
        background: #262627;
      }
    }
  }
  .goHome{
    position: fixed;
    right: 15px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    color: #FFFFFF;
    background: rgba(0,0,0,0.5);
  }
}
</style>
