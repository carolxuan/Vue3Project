<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <router-link to="/cart" class="nav-link">產品列表</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="float-icon btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-bag-plus-fill" style="font-size: 24px"></i>
      <span class="badge bg-danger">2</span>
    </button>
    <div class="dropdown-menu dropdown-cart-menu">
      <table class="table table-sm">
        <thead>
          <tr>
            <th>品項</th>
            <th>數量</th>
            <th>金額</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>iorjgieogergergergerg</td>
            <td>1 / 件</td>
            <td>1000元</td>
            <td class="text-end">
              <a href="#">
                <i class="bi bi-x-circle text-danger" style="font-size: 24px"></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>總計</td>
            <td>222222</td>
          </tr>
        </tfoot>
      </table>
      <a href="#" class="btn btn-primary d-block">
        <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
      </a>
    </div>
  </div>
  <div class="container mt-3 position-relative">
    <Loading :active="isLoading"></Loading>
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
  <footer>1234</footer>
</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
