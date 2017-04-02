<template>
  <div id="app">
    <div class="page">
      <HeadMobile></HeadMobile>
      <NavMobile></NavMobile>
      <router-view></router-view>
      <FootMobile></FootMobile>
    </div>
    <MenuMobile></MenuMobile>
  </div>
</template>

<script>
import HeadMobile from '@/components/Head'
import MenuMobile from '@/components/Menu'
import NavMobile from '@/components/Nav'
import FootMobile from '@/components/Foot'
export default {
  name: 'app',
  components: {
    HeadMobile,
    MenuMobile,
    NavMobile,
    FootMobile
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
