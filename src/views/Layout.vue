<template>
  <header>
    <div class="content-inner">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand logo" href="#"><img src="../assets/images/logo.svg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <router-link to="/cart" class="nav-link text-dark">購物專區</router-link>
            </li>
            <li>
              <router-link to="/login" class="nav-link text-dark">登入</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  <div class="float-icon btn-group ms-auto">
    <button type="button" class="btn btn-green dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
      <i class="bi bi-cart-fill" style="font-size: 24px"></i>
      <span class="badge bg-danger">{{ cartLength }}</span>
    </button>
    <div class="dropdown-menu dropdown-cart-menu">
      <div class="scroll-table">
        <table class="table table-sm mb-0 ml-auto">
          <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="td-css"><img :src="item.product.imageUrl" :alt="item.product.title"></td>
                <td class="td-css">{{ item.product.title }}</td>
                <td class="td-css">{{ item.qty }} / {{ item.product.unit }}</td>
                <td class="td-css">{{ $filters.currency(item.product.price * item.qty) }}</td>
                <td class="td-css text-end">
                  <a href="#" @click.prevent="removeCartItem(item.id)">
                    <i class="bi bi-x-circle text-danger" style="font-size: 24px"></i>
                  </a>
                </td>
              </tr>
              <tr v-if="cartLength < 1">
                <td class="text-center py-4 px-4" colspan="5"><h5>購物車是空的</h5></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <p class="text-end fw-bold display-10 bg-gray3 px-4 py-4"><span class="me-5">總金額</span>{{ $filters.currency(cart.total) }}</p>
      <p v-if="cartLength > 0" class="bg-gray2 px-3 py-3"><router-link to="/cartList" class="l-btn btn--primary btn--md w-100">前往結賬 <i class="bi bi-chevron-right"></i></router-link></p>
    </div>
  </div>
  <div class="container position-relative">
    <Loading :active="isLoading">
      <img src="../assets/images/loadingImg.svg">
    </Loading>
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
  <!-- 點擊回到頂部 -->
  <div class="goTop" v-if="topShow" @click="goTop">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  </div>
  <footer class="bg-green pt-6 pb-4">
    <div class="wrap justify-content-center mb-3">
      <router-link to="/cart" class="text-dark px-3">購物專區</router-link>
      <router-link to="/login" class="text-dark px-3">登入</router-link>
    </div>
    <ul class="d-flex justify-content-center mb-3">
      <li class="px-2"><a href="javascript:void(0)"><img src="../assets/images/icon-line.svg"></a></li>
      <li class="px-2"><a href="javascript:void(0)"><img src="../assets/images/icon-fb.svg"></a></li>
      <li class="px-2"><a href="javascript:void(0)"><img src="../assets/images/icon-ig.svg"></a></li>
    </ul>
    <p class="text-center">ⓒ Copyright 2021 練習使用非商業用途</p>
  </footer>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  data () {
    return {
      topShow: false,
      scrollTop: 0
    }
  },
  watch: {
    $route () {
      $('.navbar-collapse').removeClass('show')
    }
  },
  methods: {
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id)
    },
    scrollToTop () {
      this.scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 500) {
        this.topShow = true
      } else {
        this.topShow = false
      }
    },
    goTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop) // 監聽滾動條
  },
  unmounted () {
    window.removeEventListener('scroll', this.scrollToTop) // 移除滾動監聽
  },
  created () {
    this.getCart()
  }
}
</script>
