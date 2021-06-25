<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="side-menu">
          <ul>
            <li>分類一</li>
            <li>分類二</li>
            <li>分類三</li>
            <li>分類四</li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <table class="table">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}">
                </div>
              </td>
              <td>{{ item.title }}</td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary" @click="getProduct(item.id)">查看更多</button>
                <button type="button" class="btn btn-outline-primary" @click="addCart(item.id)">
                   <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> -->
                  加到購物車</button>
              </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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
