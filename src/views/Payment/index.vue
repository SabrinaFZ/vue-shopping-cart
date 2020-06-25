<template>
  <div class="payment">
    <b-card bg-variant="dark" text-variant="white">
      <b-card-text>
        Total: {{ totalPrice }} €
      </b-card-text>
    </b-card>
    <c-validation-observer
      ref="observer"
      v-slot="{ invalid }"
      tag="form"
      class="form"
    >
      <shipping-address />
      <payment-method />
      <b-button
        variant="primary"
        class="payment__pay"
        :disabled="invalid"
        @click="finishPaymentProcess"
      >
        Pay
      </b-button>
    </c-validation-observer>
  </div>
</template>

<script>

import { RESET_SHOPPING_CART } from '@/store/constants';
import ShippingAddress from './FormShippingAddress';
import PaymentMethod from './FormPaymentMethod';

export default {
  name: 'Payment',
  components: {
    ShippingAddress,
    PaymentMethod
  },
  props: {
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async finishPaymentProcess() {
      const isValid = await this.$refs.observer.validate();

      if (isValid) {
        this.$store.dispatch(`shoppingCart/${RESET_SHOPPING_CART}`);
        this.$router.push({ name: 'home' });
      }
    }
  }
};
</script>

<style lang="scss" src="./payment.scss">
</style>
