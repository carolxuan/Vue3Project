<template>
  <div class="admin-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="mb-0 mb-md-4">
          <router-link to="/admin/orders" class="text-white display-9">後台管理</router-link>
        </div>
        <hr class="bg-white" style="opacity:1;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
            <router-link to="/admin/products" class="nav-link">商品列表</router-link>
            <router-link to="/admin/coupons" class="nav-link">優惠卷</router-link>
            <hr class="bg-white" style="opacity:1;">
            <a href="#" class="nav-link" @click.prevent="logout"><i class="bi bi-box-arrow-in-right"></i> 登出</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      const url = `${process.env.VUE_APP_API}/logout`
      this.$http.post(url, this.user)
        .then(res => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
