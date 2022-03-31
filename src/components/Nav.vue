<template>
  <section class="nav">
    <!--v-for遍历路由-->
    <div class="nav" v-for='(m, index) in menus' :key='index'>
      <router-link :to='setPath(m.path)'><span>{{m.text}}</span></router-link>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Nav",
  data () {
    return {
      // 路由参数
      menus: [{
        text: '精选',
        path: '/home'
      }, {
        text: '话题',
        path: '/point'
      }, {
        text: '作者',
        path: '/author'
      }]
    }
  },
  methods: {
    setPath (path: string) {
      return path
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  .nav{
    width: 33%;
    height: 100%;
    a{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #666;
      font-size: 18px;
      text-align: center;
      span:first-child{
        height: 30px;
        width: 100%;
        line-height: 30px;
      }
    }
  }
  div:nth-child(2) > a > span{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .active{
    border-bottom: 1px solid red;
    box-sizing: border-box;
  }
}
</style>
