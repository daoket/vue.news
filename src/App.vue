<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <app-nav></app-nav>
      <keep-alive>
        <router-view class="fadeView"></router-view>
        <!--<router-view></router-view>-->
      </keep-alive>
      <app-foot></app-foot>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import AppHead from '@/components/public/Head'
import AppMenu from '@/components/public/Menu'
import AppNav from '@/components/public/Nav'
import AppFoot from '@/components/public/Foot'
export default {
  name: 'app',
  components: {
    'app-head': AppHead,
    'app-menu': AppMenu,
    'app-nav': AppNav,
    'app-foot': AppFoot
  }
}
</script>

<style>
#app{
  overflow: hidden;
}
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
</style>
