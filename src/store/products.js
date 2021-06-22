import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: []
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(url)
        .then(res => {
          context.commit('PRODUCTS', res.data.products)
          context.commit('LOADING', false, { root: true })
        })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  getters: {
    products (state) {
      return state.products
    }
  }
}
