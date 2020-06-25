<template>
  <div class="product-list">
    <c-card-product v-for="product in products" :key="product.id" :product="product">
      <template v-slot:title>
        <router-link :to="{name: 'product-info', params: {id: product.id} }">
          <b-card-title>{{ product.productName }}</b-card-title>
        </router-link>
      </template>
      <template v-slot:footer>
        <span>{{ product.price }} €</span>
      </template>
    </c-card-product>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" src="./products-list.scss" scoped>
</style>
