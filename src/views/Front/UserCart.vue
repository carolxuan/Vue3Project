<template>
  <Loading :active="isLoading"></Loading>
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
                   <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="this.status.loadingItem === item.id"></span>
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
export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      }
      // isLoading: false
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
          this.isLoading = false
        })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
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
    this.getProducts()
  }
}
</script>
