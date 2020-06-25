import {
  GET_PRODUCTS,
  RESET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY
} from '@/store/constants';
import api from '@/services';

export default {
  [GET_PRODUCTS]: ({ commit }) => {
    api.getAllProducts()
      .then(response => {
        response.forEach(product => {
          commit(GET_PRODUCTS, product);
        });
      });
  },
  [RESET_PRODUCTS]: ({ commit }) => {
    commit(RESET_PRODUCTS);
  },
  [GET_PRODUCTS_BY_CATEGORY]: ({ commit }, category) => {
    commit(RESET_PRODUCTS);
    api.getProductsByCategory(category)
      .then(response => {
        response.forEach(product => {
          commit(GET_PRODUCTS, product);
        });
      });
  }
};
