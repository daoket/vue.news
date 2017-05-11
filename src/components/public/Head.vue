<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="baijia" src="../../assets/head/logo.png"/></a>
    <svg class="icon searchBtn" @click='openSearch' aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <input v-model='searchContent' type="text" />
          <svg class="icon" @click='searchNewsBtn' aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <svg class="icon close" @click='closeSearch' aria-hidden="true">
          <use xlink:href="#icon-hao"></use>
        </svg>
      </div>
      <div class="content">
        <p class="today">今天</p>
        <ul class="news">
          <li ref='newsItem' v-for='(news, index) in searchNews'>
            <a :href="'#' + news.id" @click='goNews'>
              <p v-if='+index < 3'><i class="isTop3"> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
              <p v-else><i> {{index + 1}} </i><span ref='title' class="title"> {{news.title}}</span></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="aside" @click='toggleMenu'>
      <div v-for='i in 3' class="line"></div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'head',
  data () {
    return {
      imgs: [],
      searchContent: ''
    }
  },
  computed: {
    ...mapState({
      searchNews: state => state.SelectStore.searchNews
    })
  },
  watch: {
    searchContent (curVal, oldVal) {
      if (curVal === '') {
        this.$refs.newsItem.map((item) => {
          item.style.display = 'block'
          item.className = ''
        })
      }
      if (curVal !== '') {
        this.$refs.title.map((item) => {
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
    setClass (classname) {
      return classname
    },
    setSrc (src) {
      return src
    },
    searchNewsBtn () {
      alert('搜索完成')
    },
    goNews () {
      this.closeSearch()
      this.clearSearchContent()
    },
    clearSearchContent () {
      this.searchContent = ''
    },
    ...mapMutations([
      'toggleMenu', 'openSearch', 'closeSearch'
    ])
  }
}
</script>

<style lang="stylus">
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
  .baijia{
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
