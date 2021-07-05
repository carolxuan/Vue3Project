<template>
  <header>
    <div class="content-inner">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand logo" href="#"><img src="../assets/images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link to="/cart" class="nav-link text-dark">購物專區</router-link>
            <router-link to="/login" class="nav-link text-dark">登入</router-link>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="float-icon btn-group dropup">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-cart-fill" style="font-size: 24px"></i>
      <span class="badge bg-danger">{{ cartLength }}</span>
    </button>
    <div class="dropdown-menu dropdown-cart-menu">
      <table class="table table-sm">
        <thead>
          <tr>
            <th>品項</th>
            <th>數量</th>
            <th>小計</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }} / {{ item.product.unit }}</td>
              <td>{{ $filters.currency(item.product.price * item.qty) }}</td>
              <td class="text-end">
                <a href="#" @click.prevent="removeCartItem(item.id)">
                  <i class="bi bi-x-circle text-danger" style="font-size: 24px"></i>
                </a>
              </td>
            </tr>
            <tr v-if="cartLength < 1">
              <td class="text-center" colspan="4"><h5>購物車是空的</h5></td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td class="fw-bold">總金額</td>
            <td class="text-end">{{ $filters.currency(cart.total) }}</td>
          </tr>
        </tfoot>
      </table>
      <router-link to="/cartList" class="btn btn-primary d-block" v-if="cartLength > 0">前往結賬 <i class="bi bi-chevron-right"></i></router-link>
    </div>
  </div>
  <div class="container position-relative">
    <Loading :active="isLoading"></Loading>
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
  <footer class="bg-success pt-6 pb-4">
    <div class="wrap justify-content-center mb-3">
      <router-link to="/cart" class="text-dark px-3">購物專區</router-link>
      <router-link to="/login" class="text-dark px-3">登入</router-link>
    </div>
    <ul class="d-flex justify-content-center mb-3">
      <li class="px-2"><a href="#"><img src="../assets/images/icon-line.svg"></a></li>
      <li class="px-2"><a href="#"><img src="../assets/images/icon-fb.svg"></a></li>
      <li class="px-2"><a href="#"><img src="../assets/images/icon-ig.svg"></a></li>
    </ul>
    <p class="text-center">ⓒ Copyright 2021 Practice 非商業用途</p>
  </footer>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
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
