<template>
  <h3 class="fw-bold"><i class="bi bi-clock"></i> 最近訂單</h3>
  <div class="overflow-wrap mb-6">
    <table class="table-css mt-4">
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
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} / {{ product.qty }} {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="fw-bold">{{ $filters.currency(item.total) }}</td>
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
                <button class="l-btn btn--primary btn-sm" @click="openModal(false, item)">檢視</button>
                <button class="l-btn btn--secondary btn-sm" @click="delOrderModal(item)">刪除</button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <OrderModal :order="tempOrder" ref="orderModal"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-page="getOrders"></Pagination>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import DelModal from '@/components/DelModal.vue'
import OrderModal from '@/components/OrderModal.vue'

export default {
  data () {
    return {
      orders: {},
      pagination: {},
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    Pagination,
    DelModal,
    OrderModal
  },
  inject: ['emitter'],
  methods: {
    getOrders (currentPage = 1) {
      this.currentPage = currentPage
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${currentPage}`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(url)
        .then(res => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.$store.dispatch('updateLoading', false)
        })
    },
    updatePaid (item) {
      this.$store.dispatch('updateLoading', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http.put(url, { data: paid })
        .then(res => {
          this.$store.dispatch('updateLoading', false)
          this.getOrders(this.currentPage)
        })
    },
    openModal (isNew, item) {
      this.tempOrder = { ...item }
      this.isNew = false
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    delOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(res => {
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getOrders(this.currentPage)
          this.$httpMsgState(res, '刪除訂單')
        })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
