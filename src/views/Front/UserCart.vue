<template>
  <section class="discount mb-8 mb-md-12 position-relative mt-8">
    <img src="../../assets/images/discount-left.svg" class="discount-left">
    <img src="../../assets/images/discount-right.svg" class="discount-right">
    <div class="discount-cart-item wrap justify-content-md-center justify-content-start">
      <p class="h3 me-0 me-md-6 mb-2 mb-md-0">防疫期間<br>全館品項 88 折</p>
      <div class="d-flex align-items-center discount-code">
        <p class="bg-primary text-white h5">優惠碼</p>
        <p class="bg-white h4">SAFE88</p>
      </div>
    </div>
  </section>
  <section class="product-menu mb-8 mb-md-12">
    <h2 class="text-center mb-6">購物專區</h2>
    <div class="row">
      <div class="col-md-3">
        <div class="side-menu">
          <ul>
            <li class="active">全部品項</li>
            <li>蔬菜</li>
            <li>海鮮</li>
            <li>水果</li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <ul class="product-wrap wrap">
          <li v-for="item in products" :key="item.id">
            <a href="#" @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl" class="mb-3">
            </a>
            <div class="px-3">
              <h4 class="mb-2">{{ item.title }}</h4>
              <div class="d-flex justify-content-between mb-3">
                <del>NT ${{ $filters.currency(item.origin_price) }}</del>
                <p class="fw-bold">NT ${{ $filters.currency(item.price) }}</p>
              </div>
              <a href="#" class="l-btn btn--md btn--primary w-100 mb-3" @click.prevent="addCart(item.id)">加入購物車</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      })
    },
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id)
    },
    ...mapActions('productsModules', ['getProducts']),
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('productsModules', ['products']),
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
