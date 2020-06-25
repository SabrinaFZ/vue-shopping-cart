import {
  GET_PRODUCTS,
  RESET_PRODUCTS
} from '@/store/constants';

export default {
  [GET_PRODUCTS]: (state, product) => {
    product.price = (product.price % 1 === 0
      ? Math.trunc(product.price)
      : product.price
    ).toString();
    state.products.push(product);
  },
  [RESET_PRODUCTS]: state => {
    state.products = [];
  }
};
