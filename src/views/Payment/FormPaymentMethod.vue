<template>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Payment Method"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <c-input
        id="payment__placeholder"
        label="Placeholder"
        :default-value="paymentMethod['placeholder']"
        rules="required|max:20"
        @input="changePaymentMethod($event, 'placeholder')"
      />
      <c-input
        id="payment__number-card"
        type="number"
        label="Number Card"
        :default-value="paymentMethod['numberCard']"
        rules="required|max:8"
        @input="changePaymentMethod($event, 'numberCard')"
      />
      <div class="payment__date">
        <label for="payment__date">Expiration Date</label>
        <div>
          <c-input
            id="payment__expiration-month"
            type="number"
            placeholder="MM"
            :default-value="paymentMethod['expirationDateMonth']"
            rules="required|max:2"
            @input="changePaymentMethod($event, 'expirationDateMonth')"
          />
          <span class="payment__separator">/</span>
          <c-input
            id="payment__expiration-year"
            type="number"
            placeholder="YY"
            :default-value="paymentMethod['expirationDateYear']"
            rules="required|max:2"
            @input="changePaymentMethod($event, 'expirationDateYear')"
          />
        </div>
      </div>
      <c-input
        id="payment__cvc"
        label="CVC"
        :default-value="paymentMethod['cvc']"
        rules="required|max:3"
        @input="changePaymentMethod($event, 'cvc')"
      />
    </b-form-group>
  </b-card>
</template>

<script>

import { CHANGE_PAYMENT_METHOD } from '@/store/constants';

export default {
  name: 'PaymentMethod',
  computed: {
    paymentMethod() {
      return this.$store.getters['payment/dataPayment']('paymentMethod');
    }
  },
  methods: {
    changePaymentMethod(e, field) {
      this.$store.dispatch(`payment/${CHANGE_PAYMENT_METHOD}`, { field, value: e });
      this.$forceUpdate();
    }
  }
};
</script>
