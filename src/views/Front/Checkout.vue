<template>
  <ul class="step-list wrap justify-content-center mb-8">
    <li class="text-center">
      <p class="mb-2">Step.01</p>
      <h4><i class="bi bi-cart-fill"></i> 購物明細</h4>
    </li>
    <li class="text-center">
      <p class="mb-2">Step.02</p>
      <h4><i class="bi bi-credit-card"></i> 訂單資訊</h4>
    </li>
    <li class="text-center active" aria-current="true">
      <p class="mb-2">Step.03</p>
      <h4><i class="bi bi-check-circle"></i> 最後確認</h4>
    </li>
  </ul>
  <section class="checkout mb-6">
    <form @submit.prevent="payOrder">
      <table class="table align-middle mb-5">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th class="text-end">單價</th>
          <th class="text-end">小計</th>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }} / {{ item.product.unit }}</td>
          <td class="text-end">NT ${{ $filters.currency(item.product.price) }}</td>
          <td class="text-end">NT ${{ $filters.currency(item.product.price * item.qty) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td></td>
          <td colspan="2" class="text-end">總金額</td>
          <td class="text-end">NT ${{ $filters.currency(order.total) }}</td>
        </tr>
        </tfoot>
      </table>
      <div class="card-border mb-5">
        <div class="card-border-title mb-3">
          <h3 class="h5">訂購人資訊</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td class="td-css">姓名</td>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <td class="td-css">Email</td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <td class="td-css">聯絡電話</td>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <td class="td-css">地址</td>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <td class="td-css">備註</td>
              <td v-if="order.message">{{ order.message }}</td>
              <td v-else>無</td>
            </tr>
            <tr>
              <td class="td-css">訂單狀態</td>
              <td>
                <span v-if="!order.is_paid">尚未完成訂單</span>
                <span v-else class="text-danger">訂單成立</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-end" v-if="order.is_paid === false">
        <button class="l-btn btn--primary btn--lg">確認，送出訂單 <i class="bi bi-chevron-right"></i></button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.order = res.data.order
            history.pushState(null, null, document.URL)
            window.addEventListener('popstate', function (e) {
              history.pushState(null, null, document.URL)
            }, false)
          }
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then(res => {
          if (res.data.success) {
            this.getOrder()
            this.$swal({
              title: '感謝您的訂購',
              text: '即將回到首頁',
              icon: 'success',
              toast: false,
              position: 'center',
              timerProgressBar: true,
              timer: 2000
            })
            setTimeout(() => {
              this.$router.push('/')
            }, 2500)
            history.pushState(null, null, document.URL)
            window.addEventListener('popstate', function (e) {
              history.pushState(null, null, document.URL)
            }, false)
          }
        })
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getCart()
    this.getOrder()
  }
}
</script>
