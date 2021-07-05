<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay='{ "delay": 2500, "disableOnInteraction": false }' :pagination='{ "clickable": true }' :speed="600" :parallax="true" class="mySwiper">
    <swiper-slide>
      <div class="banner-bg bg-1 parallax-bg" data-swiper-parallax="-23%"></div>
      <div class="banner-inner-1 position-absolute">
        <h3 class="h1 text-white mb-3" data-swiper-parallax="-800">安心防疫，宅配送到家</h3>
        <h4 class="h2 text-white mb-4" data-swiper-parallax="-700">樂煮蔬菜箱</h4>
        <div class="text" data-swiper-parallax="-600">
          <router-link class="l-btn btn--primary btn--lg" to="/cart">馬上購物</router-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-bg bg-2 parallax-bg" data-swiper-parallax="-23%"></div>
      <div class="banner-inner-2 position-absolute">
        <h3 class="h1 mb-3 bg-text" data-swiper-parallax="-800">用心，安心</h3>
        <h4 class="h2 mb-4 bg-text" data-swiper-parallax="-700">嚴選台灣在地有機蔬菜</h4>
        <div class="text" data-swiper-parallax="-600">
          <router-link class="l-btn btn--primary btn--lg" to="/cart">馬上購物</router-link>
        </div>
      </div>
    </swiper-slide>
     <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
  Autoplay, Pagination, Parallax
} from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
SwiperCore.use([Autoplay, Pagination, Parallax])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {}
  }
}
</script>
