import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/store/modules/products';
import departments from '@/store/modules/departments';
import payment from '@/store/modules/payment';
import shoppingCart from '@/store/modules/shoppingCart';
import { SET_LOADING } from '@/store/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: {},
    loading: false
  },
  getters: {
    isLoading: state => state.loading
  },
  mutations: {
    [SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading;
    }
  },
  modules: {
    products,
    departments,
    payment,
    shoppingCart
  },
  strict: 'debug'
});
