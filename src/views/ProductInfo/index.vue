<template>
  <div class="product-info">
    <c-card-product :product="product">
      <template v-slot:body>
        <b-card-text>{{ product.product }}</b-card-text>
        <b-card-text>{{ product.department }}</b-card-text>
      </template>
      <template v-slot:footer>
        <span>{{ product.price }} €</span>
      </template>
    </c-card-product>
    <b-card bg-variant="light">
      <c-selector
        ref="selectorQty"
        :options="[1, 2, 3, 4, 5, 6, 8, 9, 10]"
        label="Quantity"
        :default-value="qty"
        @selectedValue="setQtyValue"
      />
      <b-button @click="addToShoppingCart">
        Add to cart
      </b-button>
    </b-card>
  </div>
</template>

<script>

import { ADD_SHOPPING_CART } from '@/store/constants';

export default {
  name: 'ProductInfo',
  data() {
    return {
      qty: 1
    };
  },
  computed: {
    product() {
      return this.$store.getters['products/getProduct'](this.$route.params.id);
    }
  },
  methods: {
    addToShoppingCart() {
      this.$store.dispatch(`shoppingCart/${ADD_SHOPPING_CART}`,
        { qty: this.qty, product: this.product });
      this.$router.push({ name: 'shopping-cart' });
    },
    setQtyValue(value) {
      this.qty = value;
    }
  }
};
</script>

<style lang="scss" src="./product-info.scss" scoped>
</style>
