<template>
  <div class="outSwiperBox">
    <swiper :slidesPerView="4" :loop="true" :autoplay='{ "delay": 2000, "disableOnInteraction": false }' :pagination='{ "clickable": true }' :speed="300" :breakpoints='{
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
        "spaceBetween": 24
      }
    }' class="inSwiperBox mySwiper">
      <swiper-slide v-for="item in hotProducts" :key="item.id">
        <div class="product-card">
          <router-link :to='`/product/${item.id}`'>
            <img :src="item.imageUrl" class="mb-3">
          </router-link>
          <div class="px-3">
            <h4 class="mb-2">{{ item.title }}</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT ${{ $filters.currency(item.origin_price) }}</del>
              <p class="fw-bold">NT ${{ $filters.currency(item.price) }}</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3" @click.prevent="buyNow(item.id)">加入購物車</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  Autoplay, Pagination
} from 'swiper/core'
SwiperCore.use([Autoplay, Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    hotProducts () {
      return this.products.filter((item) => item.category === '熱門商品')
    },
    ...mapGetters('productsModules', ['products', 'categories'])
  },
  methods: {
    buyNow (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      })
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
  .outSwiperBox {
    position: relative;
  }
  .inSwiperBox {
    position: initial;
    padding-bottom: 60px;
  }
</style>
