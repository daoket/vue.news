<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <app-nav></app-nav>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <app-foot></app-foot>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import AppHead from '@/components/Head'
import AppMenu from '@/components/Menu'
import AppNav from '@/components/Nav'
import AppFoot from '@/components/Foot'
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
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
</style>
