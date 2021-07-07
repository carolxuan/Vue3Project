import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: [],
    allProducts: [],
    categories: [],
    pagination: {}
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      context.commit('LOADING', true, { root: true })
      axios.get(url)
        .then(res => {
          context.commit('PRODUCTS', res.data.products)
          context.commit('CATEGORIES', res.data.products)
          context.commit('LOADING', false, { root: true })
        })
    },
    getAllProducts (context, page) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      context.commit('LOADING', true, { root: true })
      axios.get(url)
        .then(res => {
          context.commit('ALLPRODUCTS', res.data.products)
          context.commit('PAGINATION', res.data.pagination)
          context.commit('LOADING', false, { root: true })
        })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    ALLPRODUCTS (state, payload) {
      state.allProducts = payload
    },
    CATEGORIES (state, payload) {
      const categories = new Set()
      payload.forEach(item => {
        categories.add(item.category)
      })
      state.categories = Array.from(categories)
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    allProducts (state) {
      return state.allProducts
    },
    categories (state) {
      return state.categories
    },
    pagination (state) {
      return state.pagination
    }
  }
}
