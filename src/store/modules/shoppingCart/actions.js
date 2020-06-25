import {
  ADD_SHOPPING_CART,
  RESET_SHOPPING_CART,
  DELETE_PRODUCT_SHOPPING_CART,
  MODIFY_QTY_PRODUCT_SHOPPING_CART
} from '@/store/constants';

export default {
  [ADD_SHOPPING_CART]: ({ commit }, { qty, product }) => {
    commit(ADD_SHOPPING_CART, { qty, product });
  },
  [RESET_SHOPPING_CART]: ({ commit }) => {
    commit(RESET_SHOPPING_CART);
  },
  [DELETE_PRODUCT_SHOPPING_CART]: ({ commit }, product) => {
    commit(DELETE_PRODUCT_SHOPPING_CART, product);
  },
  [MODIFY_QTY_PRODUCT_SHOPPING_CART]: ({ commit }, { qty, product }) => {
    commit(MODIFY_QTY_PRODUCT_SHOPPING_CART, { qty, product });
  }
};
