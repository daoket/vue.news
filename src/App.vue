<template>
  <div id="app">
    <Menu />
    <div class="page">
      <Head />
      <Nav />
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <Foot />
    </div>
  </div>
</template>

<script lang="ts">
import { Head, Menu, Nav, Foot } from '@/components'

export default {
  name: 'App',
  components: {
    Head,
    Menu,
    Nav,
    Foot,
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
