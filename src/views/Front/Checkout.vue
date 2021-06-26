<template>
  <div>
    checkout
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.id = this.$route.params.orderId
    this.getCart()
  }
}
</script>
