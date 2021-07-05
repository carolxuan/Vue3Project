<template>
  <HomeSwiper class="banner"></HomeSwiper>
  <section class="discount mb-6">
    <div class="wrap align-items-center justify-content-around">
      <div class="discount-top d-flex align-items-center">
        <img src="../../assets/images/discount-img.svg">
        <p class="h3">防疫期間<br>全館品項 88 折</p>
      </div>
      <div class="d-flex align-items-center discount-code">
        <p class="bg-primary text-white h5">優惠碼</p>
        <p class="bg-white h4">SAFE88</p>
      </div>
    </div>
  </section>
  <section class="advantage bg-grayf8 mb-6">
    <h2 class="text-center mb-6">我們的堅持</h2>
    <ul class="advantage-item wrap justify-content-center">
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">當季</span></h4>
        <img src="../../assets/images/img-1.svg" class="mb-2">
        <p>當季嚴選蔬菜</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">多樣</span></h4>
        <img src="../../assets/images/img-2.svg" class="mb-2">
        <p>生鮮多樣選擇</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">保鮮</span></h4>
        <img src="../../assets/images/img-3.svg" class="mb-2">
        <p>冷藏運送確保品質</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">安全</span></h4>
        <img src="../../assets/images/img-4.svg" class="mb-2">
        <p>通過農藥殘留檢測</p>
      </li>
    </ul>
  </section>
  <section class="product mb-6">
    <h2 class="text-center mb-5">熱門商品</h2>
    <ProductSwiper></ProductSwiper>
  </section>
</template>

<script>
import HomeSwiper from '@/components/BannerSwiper.vue'
import ProductSwiper from '@/components/ProductSwiper.vue'

export default {
  components: {
    HomeSwiper,
    ProductSwiper
  }
}
</script>
