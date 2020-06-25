import {
  CHANGE_SHIPPING_ADDRESS,
  CHANGE_PAYMENT_METHOD
} from '@/store/constants';

export default {
  [CHANGE_SHIPPING_ADDRESS]: ({ commit }, { field, value }) => {
    commit(CHANGE_SHIPPING_ADDRESS, { field, value });
  },
  [CHANGE_PAYMENT_METHOD]: ({ commit }, { field, value }) => {
    commit(CHANGE_PAYMENT_METHOD, { field, value });
  }
};
