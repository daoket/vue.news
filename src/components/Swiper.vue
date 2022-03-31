
<template>
  <swiper :modules="modules" :pagination="{ clickable: true }">
    <!-- 这部分放你要渲染的那些内容 -->
    <swiper-slide v-for='img in banners' :key="img.channelId">
      <img :src="setBannerSrc(img)"/>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
/**
 * @desc 轮播组件
 * @doc https://github.surmon.me/vue-awesome-swiper
 */
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'HeadSwiper',
  title: 'Pagination',
  url: import.meta.url,
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const store = useStore()

    return {
      banners: computed(() => store.state.HomeStore.banners),
      modules: [Pagination]
    }
  },
  methods: {
    /**
     * @desc 设置轮播图地址
     */
    setBannerSrc (src: string) {
      return src
    },
  }
})
</script>

<style lang="scss" scoped>
.swiper-wrapper{
    height: 200px;
    .swiper-slide img{
      width: 100%;
      height: 200px;
    }
  }
</style>