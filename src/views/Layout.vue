<template>
  <div class="sticky-page">
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
    <main>
      <div class="container position-relative">
        <Loading :active="isLoading">
          <img src="../assets/images/loadingImg.svg">
        </Loading>
        <div class="fixedFooter"></div>
        <router-view/>
      </div>
      <div class="goTop" v-if="topShow" @click="goTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </div>
    </main>
    <footer class="bg-green pt-6 pb-4 mt-auto">
      <div class="wrap justify-content-center mb-3">
        <router-link to="/cart" class="text-dark px-3">購物專區</router-link>
        <router-link to="/login" class="text-dark px-3">登入</router-link>
      </div>
      <ul class="d-flex justify-content-center mb-3">
        <li class="px-2"><a href="tel:0422222222"><img src="../assets/images/icon-tel.svg"></a></li>
        <li class="px-2"><a href="mailto:123@gmail.com"><img src="../assets/images/icon-email.svg"></a></li>
        <li class="px-2"><a href="#"><img src="../assets/images/icon-fb.svg"></a></li>
      </ul>
      <p class="text-center">ⓒ Copyright 2021 練習使用非商業用途</p>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

export default {
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
