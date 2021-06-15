<template>
  <Navbar></Navbar>
  <div class="container-fluid">
     <router-view/>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
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
