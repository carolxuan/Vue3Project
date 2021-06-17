<template>
  <UserNavbar></UserNavbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import UserNavbar from '../components/UserNavbar.vue'
import ToastMessages from '@/components/ToastMessages.vue'
import emitter from '@/methods/emitter'

export default {
  components: {
    UserNavbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
