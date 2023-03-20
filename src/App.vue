<script setup lang="ts">
import { Head, Menu, Nav, Foot } from '@/components'
</script>

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
