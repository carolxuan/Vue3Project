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
        <button type="button" class="btn btn-primary" @click="addCart(product.id, cartSelect)">加到購物車</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

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
            console.log(this.product)
          }
        })
    },
    addCart (id, qty) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      })
    }
  },
  computed: {
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
