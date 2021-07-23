import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  // 前台
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          title: '首頁'
        },
        component: () => import('../views/Front/Home.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/Cart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/Front/Product.vue')
      },
      {
        path: 'cartList',
        component: () => import('../views/Front/CartList.vue')
      },
      {
        path: 'orderForm',
        component: () => import('../views/Front/OrderForm.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/Front/Checkout.vue')
      }
    ]
  },
  // 後台
  {
    path: '/admin',
    component: () => import('../views/Admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Admin/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
