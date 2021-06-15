<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">增加一個產品</button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false
    }
  },
  components: {
    ProductModal
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            // console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      this.tempProduct.origin_price = parseInt(this.tempProduct.origin_price)
      this.tempProduct.price = parseInt(this.tempProduct.price)
      // 新增
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 編輯
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](url, { data: this.tempProduct })
        .then(res => {
          console.log(res)
          productComponent.hideModal()
          this.getProducts()
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
