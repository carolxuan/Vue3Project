<template>
  <ul class="step-list wrap justify-content-center mb-8">
    <li class="text-center active" aria-current="true">
      <p class="mb-2">Step.01</p>
      <h4><i class="bi bi-cart-fill"></i> 購物明細</h4>
    </li>
    <li class="text-center">
      <p class="mb-2">Step.02</p>
      <h4><i class="bi bi-credit-card"></i> 訂單資訊</h4>
    </li>
    <li class="text-center">
      <p class="mb-2">Step.03</p>
      <h4><i class="bi bi-check-circle"></i> 最後確認</h4>
    </li>
  </ul>
  <section class="cart-list mb-4 mb-md-6">
    <h3 class="text-center mb-4">購物明細</h3>
    <div class="cart-list-table">
      <table class="table">
        <thead>
          <tr>
            <th>刪除</th>
            <th>商品明細</th>
            <th>數量</th>
            <th class="text-end">單價</th>
            <th class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-if="cartLength < 1"><td colspan="5" class="text-center py-6">無商品明細</td></tr>
            <tr v-for="(item, idx) in cart.carts" :key="idx">
              <td>
                <a href="#" @click.prevent="removeCartItem(item.id)">
                  <i class="bi bi-x-circle text-danger" style="font-size: 24px"></i>
                </a>
              </td>
              <td>
                <div class="wrap">
                  <img :src="item.product.imageUrl" :alt="item.product.title">
                  <p>{{ item.product.title }}</p>
                </div>
              </td>
              <td>
                <button type="button" class="btn px-0 py-0" @click="minus(item)">
                  <i class="bi bi-dash-circle" style="font-size: 24px"></i>
                </button>
                <span class="px-3">{{ item.qty }}</span>
                <button type="button" class="btn px-0 py-0" @click="add(item)">
                  <i class="bi bi-plus-circle" style="font-size: 24px"></i>
                </button>
              </td>
              <td class="text-end">{{ $filters.currency(item.product.price) }}</td>
              <td class="text-end">
                NT ${{ $filters.currency(item.product.price * item.qty) }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"><a href="#" class="btn btn-outline-primary" @click.prevent="removeCartAll(cartLength)">刪除全部</a></td>
            <td colspan="3" class="text-end">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="請輸入優惠卷" aria-label="coupons-btn" aria-describedby="coupons-btn" v-model="coupon_code">
                <button class="btn btn-outline-primary" type="button" id="coupons-btn" @click="addCoupon">套用</button>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-end">
              <del v-if="cart.final_total !== cart.total">總金額 NT ${{ $filters.currency(cart.total) }}</del>
              <p v-else class="display-10 fw-bold">總金額 NT ${{ $filters.currency(cart.total) }}</p>
            </td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="5" class="text-end text-danger display-10 fw-bold">折扣後總金額 NT ${{ $filters.currency(cart.final_total) }}</td>
          </tr>
          <tr>
            <td colspan="5" class="next-btn text-end">
              <router-link to="/cart" class="l-btn btn--secondary btn--md me-4">
                <i class="bi bi-chevron-left"></i> 繼續購物
              </router-link>
              <router-link to="/orderForm" class="l-btn btn--primary btn--md" v-if="cartLength > 0">
                下一步 <i class="bi bi-chevron-right"></i>
              </router-link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
  <section class="cart-list-note bg-grayf8 mb-8 mb-md-12">
    <h3 class="display-9 fw-bold mb-2">訂購須知</h3>
    <ul>
      <li>本店只提供店內自取及宅配到府，宅配約 3~7 天送達。</li>
      <li>配送地點為台灣本島，離島目前尚無配送服務，敬請見諒。</li>
      <li>配合一例一休政策，週日無配送服務，週六下單者以禮拜一開始配送。</li>
      <li>國定假日及颱風假無配送服務。</li>
      <li>冷凍肉舖全館現貨，每日下午兩點前下單並完成付款（貨到付款適用），隔日到貨。</li>
      <li class="fw-bold">※ 樂齊生鮮保有最終修改、變更、活動解釋及取消本活動之權利。</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      coupon_code: ''
    }
  },
  methods: {
    addCoupon () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(url, { data: coupon })
        .then(res => {
          if (res.data.success) {
            this.getCart()
            this.coupon_code = ''
            this.$swal({
              title: '已套用優惠卷',
              icon: 'success'
            })
          } else {
            this.$swal({
              title: '找不到優惠卷',
              icon: 'error'
            })
          }
        })
    },
    removeCartAll (len) {
      if (len < 1) {
        this.$swal({
          title: '已經全部刪除，請勿重複點擊',
          icon: 'error'
        })
        return
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          this.getCart()
        })
    },
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id)
    },
    minus (item) {
      this.$store.dispatch('cartModules/minus', item)
    },
    add (item) {
      this.$store.dispatch('cartModules/add', item)
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  created () {
    this.getCart()
  }
}
</script>
