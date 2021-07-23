<template>
  <HomeSwiper class="banner" />
  <section class="discount mb-8 mb-md-12">
    <div class="wrap align-items-center justify-content-around">
      <div class="discount-top d-flex align-items-center">
        <img src="../../assets/images/discount-img.svg" alt="防疫圖片">
        <p class="h3">防疫期間<br>全館品項 88 折</p>
      </div>
      <div class="d-flex align-items-center discount-code">
        <p class="bg-primary text-white h5">優惠碼</p>
        <p class="bg-white h4">SAFE88</p>
      </div>
    </div>
  </section>
  <section class="advantage bg-grayf8 mb-8 mb-md-12">
    <h2 class="text-center mb-6">我們的堅持</h2>
    <ul class="advantage-item wrap justify-content-center">
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">當季</span></h4>
        <img src="../../assets/images/img-1.svg" alt="當季嚴選蔬菜" class="mb-2">
        <p>當季嚴選蔬菜</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">多樣</span></h4>
        <img src="../../assets/images/img-2.svg" alt="生鮮多樣選擇" class="mb-2">
        <p>生鮮多樣選擇</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">保鮮</span></h4>
        <img src="../../assets/images/img-3.svg" alt="冷藏運送確保品質" class="mb-2">
        <p>冷藏運送確保品質</p>
      </li>
      <li>
        <h4 class="mb-3"><span class="advantage-txt display-10">安全</span></h4>
        <img src="../../assets/images/img-4.svg" alt="通過農藥殘留檢測" class="mb-2">
        <p>通過農藥殘留檢測</p>
      </li>
    </ul>
  </section>
  <section class="product mb-8 mb-md-12">
    <h2 class="text-center mb-5">熱門商品</h2>
    <ProductSwiper />
  </section>
  <section class="contact bg-grayf8 mb-8 mb-md-12">
    <div class="wrap align-items-center justify-content-center">
      <div class="contact-txt">
        <h2 class="mb-3">聯絡我們</h2>
        <ul>
          <li class="mb-3"><span>信箱</span>leqi1688@gmail.com</li>
          <li class="mb-3"><span>電話</span>04-22456799></li>
          <li class="mb-4"><span>地址</span>台中市北屯區遼寧路一段376號</li>
          <li class="mb-2">更多資訊，歡迎加入我們 Line 官方帳號</li>
          <li>
            <a href="#">
              <img src="../../assets/images/lineBtn.svg" alt="加入我們" style="width: 120px">
            </a>
          </li>
        </ul>
      </div>
      <div class="contact-form">
        <Form class="user-form" v-slot="{ errors }" @submit="sendOut">
          <div class="form-group mb-3">
            <label for="userName" class="form-label">您的姓名</label>
            <Field type="text" name="姓名" class="form-control" id="userName" aria-describedby="namelHelp" placeholder="輸入姓名" rules="required" :class="{ 'is-invalid': errors['姓名'] }" v-model="form.name" />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
          <div class="form-group mb-3">
            <label for="userEmail" class="form-label">您的信箱</label>
            <Field type="email" name="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="輸入信箱" :class="{ 'is-invalid': errors['email'] }" rules="email|required" v-model="form.email" />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="textarea" class="form-label">留言</label>
            <textarea class="form-control" id="textarea" rows="3" name="備註" v-model="form.msg"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="l-btn btn--md btn--primary">送出</button>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
import HomeSwiper from '@/components/BannerSwiper.vue'
import ProductSwiper from '@/components/ProductSwiper.vue'

export default {
  components: {
    HomeSwiper,
    ProductSwiper
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        msg: ''
      }
    }
  },
  methods: {
    sendOut (values, { resetForm }) {
      if (values) {
        this.$swal({
          title: '送出成功',
          icon: 'success'
        })
        resetForm()
      }
      this.form.msg = ''
    }
  }
}
</script>
