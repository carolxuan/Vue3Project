<template>
  <div class="login">
    <div class="login-inner">
      <div class="text-center mb-6">
        <img src="../assets/images/logo.svg">
      </div>
      <div class="login-select mb-3">
        <a href="javascript:void(0)" class="pe-4 fw-bold display-10">登入</a>
        <router-link to="/">回首頁</router-link>
      </div>
      <p class="login-arrow"></p>
      <div class="login-form bg-white">
        <form class="row justify-content-center" @submit.prevent="signIn">
          <div class="col-md-8 col-10">
            <h4 class="mb-4 font-weight-normal">登入樂齊</h4>
            <div class="mb-3">
              <label for="inputEmail" class="sr-only">Email address</label>
              <input
                type="email"
                name="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
                v-model="user.username"
              />
            </div>
            <div class="mb-4">
              <label for="inputPassword" class="sr-only">Password</label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                autocomplete="on"
                required
                v-model="user.password"
              />
            </div>
            <div class="text-center">
              <button class="l-btn btn--primary btn--md" type="submit">登入</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(url, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `myToken=${token}; expires=${new Date(expired)}`
            this.$swal({
              title: '登入成功',
              text: '即將跳轉到後台',
              icon: 'success',
              toast: false,
              position: 'center',
              timerProgressBar: true,
              timer: 2000
            })
            setTimeout(() => {
              this.$router.push('/admin/orders')
            }, 2500)
          }
        })
    }
  }
}
</script>
