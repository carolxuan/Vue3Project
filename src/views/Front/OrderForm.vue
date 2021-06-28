<template>
  <ul class="step-list wrap justify-content-center mb-8">
    <li class="text-center">
      <p class="mb-2">Step.01</p>
      <h4><i class="bi bi-cart-fill"></i> 購物明細</h4>
    </li>
    <li class="text-center active" aria-current="true">
      <p class="mb-2">Step.02</p>
      <h4><i class="bi bi-credit-card"></i> 訂單資訊</h4>
    </li>
    <li class="text-center">
      <p class="mb-2">Step.03</p>
      <h4><i class="bi bi-check-circle"></i> 最後確認</h4>
    </li>
  </ul>
  <section class="order-form mb-7">
    <Form action="" class="orderInfo-form" v-slot="{ errors }" @submit="createOrder">
      <div class="card-border mb-4">
        <div class="card-border-title mb-3">
          <h3 class="h5">選擇取貨方式</h3>
        </div>
        <div class="form-check mb-3" v-for="take in takeOption" :key="take">
          <Field class="form-check-input" type="radio" name="取貨方式" :id="take" :value="take" v-model="form.takeWay" rules="required" :class="{ 'is-invalid': errors['取貨方式'] }"></Field>
          <label class="form-check-label" :for="take">
            {{ take }}
          </label>
          <ErrorMessage name="取貨方式" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="card-border mb-4">
        <div class="card-border-title mb-3">
          <h3 class="h5">選擇付款方式</h3>
        </div>
        <div class="form-check mb-3" v-for="pay in payOption" :key="pay">
          <Field class="form-check-input" type="radio" name="付款方式" :id="pay" :value="pay" v-model="form.payMethod" rules="required" :class="{ 'is-invalid': errors['付款方式'] }"></Field>
          <label class="form-check-label" :for="pay">
            {{ pay }}
          </label>
          <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
        </div>
      </div>
      <div class="card-border mb-4">
        <div class="card-border-title mb-3">
          <h3 class="h5">訂購人資訊</h3>
        </div>
        <div class="wrap">
          <div class="col-md-6 col-12 mb-3 pe-md-3 pe-0">
            <label for="customerName" class="form-label">姓名</label>
            <Field type="text" class="form-control orderInfo-input" id="customerName" name="姓名" placeholder="請輸入姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }" v-model="form.user.name"></Field>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-md-6 col-12 mb-3 ps-md-3 ps-0">
            <label for="customerPhone" class="form-label">電話</label>
            <Field
              type="tel"
              class="form-control orderInfo-input"
              id="customerPhone"
              name="電話"
              placeholder="請輸入電話"
              :class="{ 'is-invalid': errors['電話'] }"
              rules="required"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
        </div>
        <div class="mb-3">
          <label for="customerEmail" class="form-label">E-mail</label>
          <Field
            type="text"
            class="form-control orderInfo-input"
            id="customerEmail"
            name="email"
            placeholder="請輸入 E-mail"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="customerAddress" class="form-label">地址</label>
          <Field
            type="text"
            class="form-control orderInfo-input"
            id="customerAddress"
            name="地址"
            placeholder="請輸入寄送地址"
            :class="{ 'is-invalid': errors['地址'] }"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="textarea" class="form-label">備註 (選填)</label>
          <textarea
            class="form-control"
            id="textarea"
            rows="3"
            name="備註"
            v-model="form.message"
          ></textarea>
        </div>
      </div>
      <div class="text-end">
        <router-link to="/cartList" class="btn btn-secondary me-4">
          <i class="bi bi-chevron-left"></i> 上一步
        </router-link>
        <button class="btn btn-primary">下一步 <i class="bi bi-chevron-right"></i></button>
      </div>
    </Form>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      takeOption: ['到店自取', '外送'],
      payOption: ['到店付款取貨', 'LINE Pay', '現金付款'],
      form: {
        takeWay: '',
        payMethod: '',
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    createOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then(res => {
          if (res.data.success) {
            const orderId = res.data.orderId
            this.$router.push(`/checkout/${orderId}`)
            this.$swal({
              title: '建立訂單成功',
              icon: 'success'
            })
          } else {
            this.$swal({
              title: '購物車沒有商品',
              icon: 'error'
            })
          }
        })
    },
    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  created () {
    this.getCart()
  }
}
</script>
