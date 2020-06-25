<template>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Shipping Address"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <c-input
        id="payment__street"
        label="Street"
        :default-value="shippingAddress['street']"
        rules="required"
        @input="changeShippingAdress($event, 'street')"
      />
      <c-input
        id="payment__city"
        label="City"
        :default-value="shippingAddress['city']"
        rules="required"
        @input="changeShippingAdress($event, 'city')"
      />
      <c-input
        id="payment__country"
        label="Country"
        :default-value="shippingAddress['country']"
        rules="required"
        @input="changeShippingAdress($event, 'country')"
      />
      <c-input
        id="payment__state"
        label="State"
        :default-value="shippingAddress['state']"
        rules="required"
        @input="changeShippingAdress($event, 'state')"
      />
    </b-form-group>
  </b-card>
</template>

<script>
import { CHANGE_SHIPPING_ADDRESS } from '@/store/constants';

export default {
  name: 'ShippingAddress',
  computed: {
    shippingAddress() {
      return this.$store.getters['payment/dataPayment']('shippingAddress');
    }
  },
  methods: {
    changeShippingAdress(value, field) {
      this.$store.dispatch(`payment/${CHANGE_SHIPPING_ADDRESS}`, { field, value });
      this.$forceUpdate();
    }
  }
};
</script>
