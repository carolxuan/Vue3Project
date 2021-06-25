import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cart: {},
    cartLength: 0
  },
  actions: {
    getCart (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(url)
        .then(res => {
          context.commit('CART', res.data.data)
          context.commit('CART_LENGTH', res.data.data.carts.length)
          context.commit('LOADING', false, { root: true })
        })
    },
    removeCartItem (context, id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      context.commit('LOADING', true, { root: true })
      axios.delete(url)
        .then(res => {
          context.commit('LOADING', false, { root: true })
          context.dispatch('getCart')
        })
    },
    addCart (context, { id, qty }) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      context.commit('LOADING', true, { root: true })
      const cart = {
        product_id: id,
        qty: qty
      }
      axios.post(url, { data: cart })
        .then(res => {
          context.dispatch('getCart')
          context.commit('LOADING', false, { root: true })
        })
    },
    minus (context, item) {
      context.state.cart.carts.forEach(cartItem => {
        if (item.product_id === cartItem.product_id) {
          if (cartItem.qty > 1) {
            context.commit('MINUS', cartItem)
          }
        }
      })
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart })
        .then(res => {
          context.dispatch('getCart')
        })
    },
    add (context, item) {
      context.state.cart.carts.forEach(cartItem => {
        if (item.product_id === cartItem.product_id) {
          context.commit('ADD', cartItem)
        }
      })
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios.put(url, { data: cart })
        .then(res => {
          context.dispatch('getCart')
        })
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    },
    CART_LENGTH (state, payload) {
      state.cartLength = payload
    },
    MINUS (state, payload) {
      payload.qty -= 1
    },
    ADD (state, payload) {
      payload.qty += 1
    }
  },
  getters: {
    cart (state) {
      return state.cart
    },
    cartLength (state) {
      return state.cartLength
    }
  }
}
