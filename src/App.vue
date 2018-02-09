<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="page">
      <app-head></app-head>
      <app-nav></app-nav>
      <!--keep-alive 切换路不会触发mounted-->
      <keep-alive><router-view></router-view></keep-alive>
      <app-foot></app-foot>
    </div>
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
