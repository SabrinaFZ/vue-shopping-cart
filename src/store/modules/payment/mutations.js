import {
  CHANGE_SHIPPING_ADDRESS,
  CHANGE_PAYMENT_METHOD
} from '@/store/constants';

export default {
  [CHANGE_SHIPPING_ADDRESS]: (state, { field, value }) => {
    state.shippingAddress[field] = value;
  },
  [CHANGE_PAYMENT_METHOD]: (state, { field, value }) => {
    state.paymentMethod[field] = value;
  }
};
