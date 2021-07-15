<template>
  <h3 class="fw-bold"><i class="bi bi-list-ul"></i> 商品列表</h3>
  <div class="text-end">
    <button class="l-btn btn--primary btn--md" type="button" @click="openModal(true)">增加一個產品</button>
  </div>
  <div class="overflow-wrap mb-6">
    <table class="table-css mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <span class="text-primary" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="l-btn btn--primary btn-sm" @click="openModal(false, item)">編輯</button>
              <button class="l-btn btn--secondary btn-sm" @click="openDelModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @emit-page="getProducts"></Pagination>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

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
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
          this.$store.dispatch('updateLoading', false)
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
          productComponent.hideModal()
          if (res.data.success) {
            this.getProducts()
            this.$httpMsgState(res, '更新產品')
          } else {
            this.$httpMsgState(res, '更新產品')
          }
        })
    },
    openDelModal (item) {
      this.tempProduct = item
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$store.dispatch('updateLoading', true)
      this.$http.delete(url)
        .then(res => {
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getProducts()
          this.$store.dispatch('updateLoading', false)
          this.$httpMsgState(res, '刪除產品')
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
