<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/cart">全部商品</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
    </ol>
  </nav>
  <section class="row mb-8 mb-md-12">
    <div class="col-md-7 col-12 mb-3 userProduct-img">
      <img :src="product.imageUrl" :alt="product.title">
    </div>
    <div class="col-md-5 col-12">
      <h2 class="fw-bold">{{ product.title }}</h2>
      <hr>
      <div class="mb-3 display-10" style="white-space: pre-wrap; word-wrap: break-word; word-break: break-all; line-height: 28px;">{{ product.description }}</div>
      <div style="white-space: pre-wrap; word-wrap: break-word; word-break: break-all; line-height: 24px;">{{ product.content }}</div>
      <hr>
      <div class="h5" v-if="!product.price">{{ product.origin_price }}</div>
      <del class="h6" v-if="product.price">原價 {{ $filters.currency(product.origin_price) }} 元</del>
      <div class="h5 mb-4 fw-bold text-danger" v-if="product.price">現在只要 {{ $filters.currency(product.price) }} 元</div>
      <div class="d-flex justify-content-between">
        <select class="form-select me-2" aria-label="select" style="width: 40%;" v-model="cartSelect">
          <option value="0" disabled selected>請選擇數量</option>
          <option :value="num" v-for="num in 15" :key="num">{{ num }}</option>
        </select>
        <button type="button" class="l-btn btn--primary btn--md" @click="addCart(product.id, cartSelect)">加到購物車</button>
      </div>
    </div>
  </section>
  <section class="mb-8 mb-md-12">
    <h3 class="fw-bold mb-4">你可能也喜歡</h3>
    <ul class="product-wrap userProduct-wrap wrap mb-4">
      <li v-for="item in otherFilter.slice(0, 8)" :key="item.id">
          <a href="#" @click.prevent="moreItem(item)">
            <img :src="item.imageUrl" class="mb-3">
          </a>
          <div class="px-3">
            <h4 class="mb-2">{{ item.title }}</h4>
            <div class="d-flex justify-content-between mb-3">
              <del>NT ${{ $filters.currency(item.origin_price) }}</del>
              <p class="fw-bold">NT ${{ $filters.currency(item.price) }}</p>
            </div>
            <a href="#" class="l-btn btn--md btn--primary w-100 mb-3" @click.prevent="addCart(item.id, cartSelect)">加入購物車</a>
          </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      product: {},
      id: '',
      cartSelect: 1
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(url)
        .then(res => {
          this.$store.dispatch('updateLoading', false)
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addCart (id, qty) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      })
    },
    moreItem (item) {
      if (item.is_enabled) {
        this.id = item.id
        this.$router.push(`/product/${item.id}`)
        this.getProduct(item.id)
      }
    },
    ...mapActions('productsModules', ['getProducts'])
  },
  computed: {
    otherFilter () {
      return this.products.filter(item => {
        if (item.category === this.product.category) {
          return item.category === this.product.category
        }
      })
    },
    ...mapGetters('productsModules', ['products'])
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getProducts()
  }
}
</script>
