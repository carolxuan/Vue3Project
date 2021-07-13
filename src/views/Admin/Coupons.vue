<template>
  <Loading :active="isLoading"></Loading>
  <h3 class="fw-bold mb-4"><i class="bi bi-percent"></i> 優惠卷</h3>
  <div class="text-end mb-4">
    <button class="l-btn btn--primary btn--md" @click="openCouponModal(true)">建立新的優惠券</button>
  </div>
  <ul class="coupons-card wrap mb-6">
    <li class="d-flex align-items-center justify-content-around" v-for="(item, idx) in coupons" :key="idx">
      <div class="mb-md-0 mb-3">
        <p class="mb-1">名稱</p>
        <p class="display-8 fw-bold">{{ item.title }}</p>
      </div>
      <div class="mb-md-0 mb-3">
        <p class="mb-2"><span class="pe-3">折扣</span>{{ item.percent }}%</p>
        <p class="mb-2"><span class="pe-3">到期</span>{{ $filters.date(item.due_date) }}</p>
        <p class="mb-2">
          <span v-if="item.is_enabled === 1" class="text-danger">已啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </p>
      </div>
      <div class="btn-group">
        <button class="l-btn btn--primary btn-sm" @click="openCouponModal(false, item)">編輯</button>
        <button class="l-btn btn--secondary btn-sm" @click="openDelCouponModal(item)">刪除</button>
      </div>
    </li>
  </ul>
  <CouponModal :coupon="tempCoupon" @update-coupon="updateCoupon" ref="couponModal"></CouponModal>
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
  <Pagination :pages="pagination" @emit-page="getCoupons"></Pagination>
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
