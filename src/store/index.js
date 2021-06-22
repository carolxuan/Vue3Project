import { createStore } from 'vuex'
import productsModules from './products'
import cartModules from './cart'

export default createStore({
  state: {
    isLoading: false
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    }
  },
  getters: {},
  modules: {
    productsModules,
    cartModules
  }
})
