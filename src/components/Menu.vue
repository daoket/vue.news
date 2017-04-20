<template>
  <section class="menu">
    <p class="user" title="京州市委书记李达康">{{userName}}</p>
    <ul class="aside">
    	<li v-for='m in menus'>{{m.text}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      userName: '京州市委书记李达康',
      menus: [{
        text: '巨头'
      }, {
        text: '人物'
      }, {
        text: '电商'
      }, {
        text: '创投'
      }, {
        text: '智能硬件'
      }, {
        text: '互联网+'
      }, {
        text: 'P2P'
      }, {
        text: '前沿技术'
      }, {
        text: '游戏'
      }]
    }
  }
}
</script>

<style lang="stylus">
.menu{
  position: fixed;
  top: 0;
  right: 0;
  color: #fff;
  width: 120px;
  height: 100%;
  background: #3C3C3D;
  z-index: 9;
  .user{
    height: 60px;
    line-height: 60px;
    background: #000;
    text-align: center;
    width: 60%;
    padding: 0 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .aside li{
    height: 50px;
    line-height: 60px;
    width: 60%;
    padding: 0 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
