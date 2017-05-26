<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <app-nav></app-nav>
      <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view class="fadeView"></router-view>
        </transition>
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
/*.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}*/
</style>
