<template>
  <div class="float-icon btn-group ms-auto">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
      <i class="bi bi-cart-fill" style="font-size: 24px"></i>
      <span v-if="cartLength > 0" class="badge bg-danger">{{ cartLength }}</span>
      <span v-else></span>
    </button>
    <div class="dropdown-menu dropdown-cart-menu">
      <div class="scroll-table">
        <table class="table mb-0 ml-auto">
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="td-css"><img :src="item.product.imageUrl" :alt="item.product.title"></td>
                <td class="td-css">{{ item.product.title }}</td>
                <td class="td-css">{{ item.qty }}{{ item.product.unit }}</td>
                <td class="td-css fw-bold">{{ $filters.currency(item.product.price * item.qty) }}</td>
                <td class="td-css text-end">
                  <a href="#" @click.prevent="removeCartItem(item.id)">
                    <i class="bi bi-x-circle text-danger" style="font-size: 24px"></i>
                  </a>
                </td>
              </tr>
              <tr v-if="cartLength < 1">
                <td class="text-center py-4 px-4" colspan="5"><h5>哈囉～購物車是空的</h5></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <p class="text-end fw-bold display-10 bg-gray3 px-4 py-4"><span class="me-5">總金額</span>{{ $filters.currency(cart.total) }}</p>
      <p v-if="cartLength > 0" class="bg-gray2 px-3 py-3"><router-link to="/cartList" class="l-btn btn--primary btn--md w-100">前往結賬 <i class="bi bi-chevron-right"></i></router-link></p>
      <p v-else class="bg-gray2 px-3 py-3"><router-link to="/cart" class="l-btn btn--primary btn--md w-100"><i class="bi bi-chevron-left"></i> 現在就去逛逛！</router-link></p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id)
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  created () {
    this.getCart()
  }
}
</script>
