<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/cart">產品列表</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">products.title</li>
      </ol>
    </nav>
    <div class="row">
      <article class="col-md-8 col-12">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid mb-3">
      </article>
      <div class="col-md-4 col-12">
        <div class="h5" v-if="!product.price">{{ product.origin_price }}</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-primary" @click="addToCart(product.id)"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="this.status.loadingItem === product.id"></span>加到購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      isLoading: false,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data.product)
            this.product = res.data.product
          }
        })
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(url, { data: cart })
        .then(res => {
          console.log(res.data)
          this.status.loadingItem = ''
          this.$httpMessageState(res, '加入購物車')
        })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
