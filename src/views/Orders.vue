<template>
  <Loading :active="isLoading"></Loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, key) in products" :key="key">
                {{ product.product.title }} 數量 {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-end">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`" v-model="item.is_paid" @change="updatePaid(item)">
              <label class="form-check-label"  :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm">檢視</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-page="getOrders"></Pagination>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      currentPage: 1,
      isLoading: false
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${currentPage}`
      this.isLoading = true
      this.$http.get(url)
        .then(res => {
          console.log(res.data.orders)
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isLoading = false
        })
    },
    updatePaid (item) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(url, { data: paid })
        .then(res => {
          this.isLoading = false
          this.getOders(this.currentPage)
          this.$httpMessageState(res, '更新付款狀態')
        })
    }
  },
  created () {
    this.getOders()
  }
}
</script>
