<template>
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
        <div class="d-flex justify-content-end">
          <select class="form-select me-2" aria-label="select" style="width: 40%;" v-model="cartSelect">
            <option value="0" disabled selected>請選擇數量</option>
            <option :value="num" v-for="num in 15" :key="num">{{ num }}</option>
          </select>
          <button type="button" class="btn btn-primary" @click="addCart(product.id, cartSelect)">加到購物車</button>
        </div>
      </div>
    </div>
  </div>
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
          }
        })
    },
    addCart (id, qty) {
      this.$store.dispatch('cartModules/addCart', { id, qty })
    }
    // updateCart (item) {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
    //   const cart = {
    //     product_id: item.product_id,
    //     qty: item.qty
    //   }
    //   this.$http.put(url, { data: cart })
    //     .then((res) => {
    //       console.log(res)
    //       this.getCart()
    //     })
    // }
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
