<template>
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單編號：</span><span>{{ tempOrder.id }}</span>
          </h5>
        </div>
        <div class="modal-body">
            <div class="mb-5">
              <h3 class="display-10 fw-bold mb-2">用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px;">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mb-5">
              <h3 class="display-10 fw-bold mb-2">訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(tempOrder.create_at)}}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ $filters.date(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-danger">已付款</strong>
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ $filters.currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 class="display-10 fw-bold mb-2">選購商品</h3>
              <table class="table">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>
                      {{ item.qty }} / {{ item.product.unit }}
                    </td>
                    <td class="text-end">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                    <td v-if="item.coupon" class="text-danger">
                      使用優惠卷：{{ item.coupon.code }}
                    </td>
                    <td v-else>無使用優惠卷</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="l-btn btn--primary btn--md" data-bs-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  name: 'orderModal',
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      modal: '',
      tempOrder: {}
    }
  },
  mixins: [modalMixin],
  watch: {
    order () {
      this.tempOrder = this.order
    }
  }
}
</script>

<style>
  .modal-body th {
    color: #666;
  }
</style>
