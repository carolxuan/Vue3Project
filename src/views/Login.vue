<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
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
        <div class="d-flex justify-content-between">
          <router-link to="/" class="text-gray4">回首頁</router-link>
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
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
            this.$router.push('/admin/products')
          }
        })
    }
  }
}
</script>
