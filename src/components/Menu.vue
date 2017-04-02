<template>
  <section class="menu">
    <p class="user">用户名用户名用户名</p>
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
      menus: [{
        text: '巨头巨头巨头巨头巨头'
      }, {
        text: '巨头'
      }, {
        text: '巨头'
      }, {
        text: '巨头'
      }, {
        text: '巨头'
      }, {
        text: '巨头'
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
    width: 60%;
    padding: 0 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .aside li{
    height: 60px;
    line-height: 60px;
    width: 60%;
    padding: 0 20%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
