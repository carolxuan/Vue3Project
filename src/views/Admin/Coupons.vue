<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">建立新的優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in coupons" :key="idx">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal :coupon="tempCoupon" @update-coupon="updateCoupon" ref="couponModal"></CouponModal>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
    <Pagination :pages="pagination" @emit-page="getCoupons"></Pagination>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    CouponModal,
    DelModal,
    Pagination
  },
  data () {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  inject: ['emitter'],
  methods: {
    getCoupons (currentPage = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${currentPage}`
      this.$http.get(url, this.tempCoupon)
        .then(res => {
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
          this.isLoading = false
        })
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      this.$refs.delModal.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      this.tempCoupon.title = String(this.tempCoupon.title)
      this.tempCoupon.percent = parseInt(this.tempCoupon.percent)
      // 新增
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](url, { data: this.tempCoupon })
        .then(res => {
          this.$refs.couponModal.hideModal()
          if (res.data.success) {
            this.getCoupons()
            this.$httpMsgState(res, '更新')
          } else {
            this.$httpMsgState(res, '更新')
          }
        })
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url)
        .then((res) => {
          this.$httpMsgState(res, '刪除')
          this.$refs.delModal.hideModal()
          this.getCoupons(this.currentPage)
        })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
