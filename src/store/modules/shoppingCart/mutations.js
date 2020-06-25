import {
  ADD_SHOPPING_CART,
  RESET_SHOPPING_CART,
  DELETE_PRODUCT_SHOPPING_CART,
  MODIFY_QTY_PRODUCT_SHOPPING_CART
} from '@/store/constants';

export default {
  [ADD_SHOPPING_CART]: (state, { qty, product }) => {
    const productInShoppingCart = state.shoppingCart.find(item => product.id === item.id);
    if (productInShoppingCart) {
      productInShoppingCart.quantity += qty;
    } else {
      state.shoppingCart.push({ ...product, quantity: qty });
    }
  },
  [RESET_SHOPPING_CART]: state => {
    state.shoppingCart = [];
  },
  [DELETE_PRODUCT_SHOPPING_CART]: (state, product) => {
    state.shoppingCart = state.shoppingCart.filter(item => item !== product);
  },
  [MODIFY_QTY_PRODUCT_SHOPPING_CART]: (state, { qty, product }) => {
    state.shoppingCart = state.shoppingCart.map(item => {
      if (item === product) {
        item.quantity = qty;
      }
      return item;
    });
  }
};
