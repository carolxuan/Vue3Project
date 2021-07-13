<template>
  <div class="wrap">
    <div class="sidebar-meun">
      <SideBar></SideBar>
    </div>
    <div class="admin-content col-lg-9 col-md-9 col-12">
      <div class="container mt-6 mb-6">
        <ToastMessages></ToastMessages>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import SideBar from '@/components/AdminNavbar.vue'

export default {
  components: {
    ToastMessages,
    SideBar
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const url = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(url, this.user)
      .then(res => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
