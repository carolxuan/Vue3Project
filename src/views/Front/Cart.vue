<template>
  <CartFloat />
  <section class="discount mb-8 mb-md-12 position-relative mt-8">
    <img src="../../assets/images/discount-left.svg" alt="折扣優惠" class="discount-left">
    <img src="../../assets/images/discount-right.svg" alt="折扣優惠" class="discount-right">
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
        <div class="side-menu mb-4">
          <a class="btn btn-green d-md-none mb-2 ms-2" data-bs-toggle="collapse" href="#collapseExample" role="button"  aria-expanded="false" aria-controls="collapseExample">選擇品項 <i class="bi bi-chevron-down icon-open"></i><i class="bi bi-chevron-up icon-close"></i>
          </a>
          <div class="collapse d-md-block" id="collapseExample">
            <ul>
              <li @click="filterText = ''" :class="{ 'active': filterText === '' }">全部商品</li>
              <li v-for="item in categories" :key="item" @click="filterText = item" :class="{ 'active': item === filterText }">{{ item }}</li>
            </ul>
          </div>
          <form class="search-area form-inline my-3 my-lg-0">
            <div class="input-group">
              <input class="form-control" type="text" v-model="searchText"
                placeholder="想找什麼嗎？" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button"
                  @click="searchText = ''">
                  <i v-if="searchText" class="bi bi-x-lg"></i>
                  <i v-else class="bi bi-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <div class="product-title mb-3 d-md-none d-block">
          <h4 class="d-flex align-items-center justify-content-center">
            <b></b>
            <span v-if="filterText === ''">全部商品</span>
            <span v-else>{{ filterText }}</span>
            <b></b>
          </h4>
        </div>
        <ul class="product-wrap wrap mb-4">
          <li v-for="item in filterProducts" :key="item.id">
            <a href="#" @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl" :alt="item.title" class="mb-3">
            </a>
            <div class="px-3">
              <h4 class="mb-2">{{ item.title }}</h4>
              <div class="d-flex justify-content-between mb-3">
                <del>NT ${{ $filters.currency(item.origin_price) }}</del>
                <p class="fw-bold">NT ${{ $filters.currency(item.price) }}</p>
              </div>
              <a href="#" class="l-btn btn--md btn-outline--primary w-100 mb-3" @click.prevent="addCart(item.id)">加入購物車</a>
            </div>
          </li>
        </ul>
        <div v-if="(searchText || filterProducts.length) && filterProducts.length == 0">
          <div class="col-12 mb-4">
            <div class="no-results bg-grayf8">
              <p>找不到有關 '{{ searchText }}'</p>
            </div>
          </div>
        </div>
        <Pagination :pages="pagination" @emit-page="getAllProducts" v-if="filterText===''" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Pagination from '@/components/Pagination.vue'
import CartFloat from '@/components/CartFloat.vue'

export default {
  data () {
    return {
      product: {},
      filterText: '',
      searchText: ''
    }
  },
  components: {
    Pagination,
    CartFloat
  },
  methods: {
    getAllProducts (page = 1) {
      this.$store.dispatch('productsModules/getAllProducts', page)
    },
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
    filterProducts () {
      if (this.filterText === '' && !this.searchText) {
        return this.allProducts.filter(item => item.title.toLowerCase().includes(this.searchText.toLowerCase()))
      } else if (!this.searchText) {
        return this.products.filter(item => this.filterText.includes(item.category))
      } else if (this.searchText) {
        return this.products.filter(item => item.title.toLowerCase().includes(this.searchText.toLowerCase()))
      }
      return this.products
    },
    ...mapGetters('productsModules', ['products', 'categories', 'allProducts', 'pagination']),
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.getProducts()
    this.getAllProducts()
    this.getCart()
  }
}
</script>
