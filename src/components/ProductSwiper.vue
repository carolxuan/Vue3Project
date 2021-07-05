<template>
  <div class="outSwiperBox">
    <swiper :slidesPerView="4" :loop="true" :navigation="true" :breakpoints='{
      "0": {
        "slidesPerView": 1,
        "spaceBetween": 0
      },
      "480": {
        "slidesPerView": 2,
        "spaceBetween": 16
      },
      "767": {
        "slidesPerView": 3,
        "spaceBetween": 18
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": 30
      }
    }' class="inSwiperBox mySwiper">
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">1樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">2樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">3樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="product-card">
          <a href="#">
            <img src="../assets/images/p-1.jpeg" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">4樂煮蔬菜箱</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT $450</del>
              <p>NT $390</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
  Navigation
} from 'swiper/core'
SwiperCore.use([Navigation])

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

<style>
  .outSwiperBox {
    position: relative;
  }
  .inSwiperBox {
    position: initial;
  }
  .swiper-container {
    padding-bottom: 30px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: auto;
    right: 50px;
  }
  .swiper-button-next, .swiper-button-prev {
    top: -36px;
    color: #888;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 24px;
  }
</style>
