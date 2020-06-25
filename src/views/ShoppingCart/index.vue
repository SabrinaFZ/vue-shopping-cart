<template>
  <div class="shopping-cart">
    <div v-if="shoppingCart.length" class="products">
      <c-card-product v-for="product in shoppingCart" :key="product.id" :product="product">
        <template v-slot:title>
          <router-link :to="{name: 'product-info', params: {id: product.id} }">
            <b-card-title>{{ product.productName }}</b-card-title>
          </router-link>
        </template>
        <template v-slot:body>
          <b-card-text>
            <c-selector
              :options="[1, 2, 3, 4, 5, 6, 8, 9, 10]"
              :default-value="parseInt(product.quantity)"
              label="Qty"
              @selectedValue="setQtyValue(product, ...arguments)"
            />
          </b-card-text>
          <b-button variant="danger" @click="deleteProduct(product)">
            <c-icon icon="times-circle" />
          </b-button>
        </template>
        <template v-slot:footer>
          <b-card-text>{{ product.price * product.quantity }} €</b-card-text>
        </template>
      </c-card-product>
    </div>
    <b-card
      v-if="shoppingCart.length"
      title="Payment Resume"
    >
      <b-card-body>
        <b-card-text class="shopping-cart-resume">
          <ul>
            <li
              v-for="product in shoppingCart"
              :key="product.id"
              class="shopping-cart-resume__product"
            >
              <span
                class="shopping-cart-resume__product-name"
              >
                {{ product.productName }} ({{ product.quantity }})
              </span>
              <span
                class="shopping-cart-resume__product-price"
              >{{ product.price * product.quantity }} €
              </span>
            </li>
          </ul>
          <hr />
          <p class="shopping-cart-resume__total">
            <span>{{ getTotalPrice() }} €</span>
          </p>
          <b-button variant="primary" class="shopping-cart-resume__pay" @click="goToPaymentProcess">
            Pay
          </b-button>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { DELETE_PRODUCT_SHOPPING_CART, MODIFY_QTY_PRODUCT_SHOPPING_CART } from '@/store/constants';

export default {
  name: 'ShoppingCart',
  computed: {
    shoppingCart() {
      return this.$store.getters['shoppingCart/dataShoppingCart']('shoppingCart');
    }
  },
  methods: {
    goToPaymentProcess() {
      this.$router.push({ name: 'payment', params: { totalPrice: this.getTotalPrice() } });
    },
    deleteProduct(product) {
      this.$store.dispatch(`shoppingCart/${DELETE_PRODUCT_SHOPPING_CART}`, product);
    },
    setQtyValue(product, value) {
      this.$store.dispatch(`shoppingCart/${MODIFY_QTY_PRODUCT_SHOPPING_CART}`,
        { qty: value, product });
    },
    getTotalPrice() {
      let price = 0;
      if (this.shoppingCart.length) {
        this.shoppingCart.forEach(product => {
          price += product.price * product.quantity;
        });
      }
      return price;
    }
  }
};
</script>

<style lang="scss" src="./shopping-cart.scss" scoped>
</style>
