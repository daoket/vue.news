<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="baijia" src="../assets/head/logo.png"/></a>
    <img class="searchBtn" @click='openSearch' src="../assets/head/icon-search.png"/>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <input type="text" />
          <img src="../assets/head/icon-search.png"/>
        </div>
        <div class="close" @click='closeSearch'>
          <div v-for='i in 2' class="closeLine"></div>
        </div>
      </div>
      <div class="content">
        <p class="today">今天</p>
        <ul class="news" v-for='(title, index) in newsTitle'>
        	<li v-if='+index < 3'><i class="isTop3"> {{index + 1}} </i><span> {{title}}</span></li>
        	<li v-else><i> {{index + 1}} </i><span> {{title}}</span></li>
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
      imgs: []
    }
  },
  computed: {
    ...mapState({
      newsTitle: state => state.SelectStore.newsTitle
    })
  },
  methods: {
    setClass (classname) {
      return classname
    },
    setSrc (src) {
      return src
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
    right: 15%;
    cursor: pointer;
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
        width: 82%;
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
      }
      .close{
        height: 40px;
        width: 50px;
        margin-left: 2%;
        padding-top: 35px;
        .closeLine{
          height: 1px;
          width: 70%;
          background: #fff;
        }
        .closeLine:first-child{
          color: red;
          transform: rotate(45deg);
        }
        .closeLine:last-child{
          color: red;
          transform: rotate(-45deg);
        }
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
      i{
        font-size: 16px;
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
}
</style>
