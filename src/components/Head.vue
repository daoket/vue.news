<template>
  <header class="head">
    <a href="javascript: void(0)"><img class="baijia" src="../assets/head/logo.png"/></a>
    <img class="searchBtn" @click='openSearch' src="../assets/head/icon-search.png"/>
    <div class="searchPage">
      <div class="header">
        <div class="search">
          <img src="../assets/head/icon-search.png"/>
        </div>
        <div class="close" @click='closeSearch'>
          <div v-for='i in 2' class="closeLine"></div>
        </div>
      </div>
    </div>
    <div class="aside" @click='toggleMenu'>
      <div v-for='i in 3' class="line"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      imgs: []
    }
  },
  methods: {
    setClass (classname) {
      return classname
    },
    setSrc (src) {
      return src
    },
    toggleMenu () {
      var page = document.querySelector('#app .page')
      var aside = document.querySelector('.head .aside')
      var pageClass = page.className
      var asideClass = aside.className
      if (pageClass === 'page') {
        page.className = 'page toggle'
      } else {
        page.className = 'page'
      }
      if (asideClass === 'aside') {
        aside.className = 'aside closeMenu'
      } else {
        aside.className = 'aside'
      }
    },
    openSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'block'
    },
    closeSearch () {
      var searchPage = document.querySelector('.head .searchPage')
      searchPage.style.display = 'none'
    }
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
        justify-content: flex-end;
        align-items: center;
      }
      .close{
        height: 40px;
        width: 12%;
        margin-left: 2%;
        padding-top: 34px;
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
}
</style>
