import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import App from './App.vue'
import router from './router'
import store from './store'
import { currency, date } from './methods/filters'
import $httpMsgState from './methods/pushMsgState'

const app = createApp(App)

app.config.globalProperties.$httpMsgState = $httpMsgState

// sweetalert2
const options = {
  toast: true,
  position: 'top-end',
  background: 'black',
  showConfirmButton: false,
  timer: 2500
}

app.config.globalProperties.$filters = { currency, date }

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')

app.use(VueAxios, axios)
app.use(router)
app.use(store)
app.use(VueSweetalert2, options)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
