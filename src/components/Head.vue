<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="vNews" @click="goHome" src="@/assets/head/logo.png"/></a>
    <svg class="icon searchBtn" @click='openSearch' t="1648682604996" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1270" width="64" height="64"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="1271"></path></svg>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <input v-model='searchContent' type="text" />
          <svg class="icon" @click='searchNewsBtn' t="1648682604996" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1270" width="64" height="64"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="1271"></path></svg>
        </div>
        <svg class="icon close" @click='closeSearch' t="1648682740162" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1263" width="64" height="64"><path d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z" p-id="1264"></path></svg>
      </div>
      <div class="content">
        <p class="today">今天</p>
        <ul class="news">
          <li ref='newsItem' v-for='(news, index) in searchNews' :key='index'>
            <a :href="'#' + news.id" @click='goNews'>
              <p v-if='+index < 3'><i class="isTop3"> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
              <p v-else><i> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside" @click='toggleMenu'>
      <div v-for='i in 3' :key='i' class="line"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Head',
  data () {
    return {
      imgs: [],
      searchContent: '',
    }
  },
  setup() {
    const store = useStore()
 
    return {
      searchNews: computed(() => store.state.HomeStore.searchNews),

      toggleMenu: () => store.commit('toggleMenu'),
      openSearch: () => store.commit('openSearch'),
      closeSearch: () => store.commit('closeSearch'),
    }
  },
  watch: {
    searchContent (curVal) {
      if (curVal === '') {
        (this as any).$refs.newsItem.map((item: any) => {
          item.style.display = 'block'
          item.className = ''
        })
      }
      if (curVal !== '') {
        (this as any).$refs.title.map((item: any) => {
          if (item.innerText.match(curVal)) {
            item.parentNode.parentNode.parentNode.className = 'hightColor'
          } else {
            item.parentNode.parentNode.parentNode.style.display = 'none'
          }
        })
      }
    }
  },
  methods: {
    setClass (classname: string) {
      return classname
    },
    setSrc (src: string) {
      return src
    },
    searchNewsBtn () {
      alert('搜索完成')
    },
    goNews () {
      this.closeSearch()
      this.clearSearchContent()
    },
    goHome () {
      this.$router.push('/home')
    },
    clearSearchContent () {
      this.searchContent = ''
    },
  }
}
</script>

<style lang="scss" scoped>
.head{
  height: 60px;
  background: #262627;
  position: relative;
  img{
    height: 50px;
    position: absolute;
    top: 5px;
    right: 20%;
    cursor: pointer;
  }
  .vNews{
    height: 20px;
    top: 20px;
    left: 10px;
  }
  .baidu{
    right: 30%;
  }
  .searchBtn{
    cursor: pointer;
    color: #FFFFFF;
    position: absolute;
    top: 18px;
    right: 15%;
  }
  .aside{
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .line{
      height: 1px;
      width: 25px;
      background: #fff;
      transition: all 0.5s;
    }
    .line:nth-of-type(2){
      margin: 6px 0;
    }
  }
  .closeMenu{
    .line:first-child{
      transform: rotate(45deg);
    }
    .line:nth-child(2){
      display: none;
    }
    .line:last-child{
      transform: rotate(-45deg);
    }
  }
  .searchPage{
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: scroll;
    background: #fff;
    z-index: 999;
    .header{
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 2%;
      background: #262627;
      .search{
        height: 40px;
        width: 85%;
        border: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
          height: 40px;
          width: 82%;
          color: #FFFFFF;
          text-indent: 10px;
          background-color: #262627;
          outline: none;
        }
        .icon{
          color: #FFFFFF;
          margin-right: 5%;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
      }
      .close{
        height: 30px;
        width: 30px;
        color: #FFFFFF;
      }
    }
  }
  .content{
    overflow: hidden;
    background-color: #FFFFFF;
    .today{
      height: 25px;
      background: #E3E4EE;
      line-height: 25px;
      text-indent: 15px;
      font-size: 14px;
    }
    .news li{
      font-size: 16px;
      margin: 15px;
      p{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      i{
        font-size: 16px;
        font-style: normal;
        margin-right: 10px;
      }
      i.isTop3{
        color: red;
      }
      span{
        width: 90%;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .hightColor{
    color: #FFFFFF;
    background-color: #EEEEEE;
  }
}
</style>
