<template>
  <b-card
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    no-body
  >
    <b-card-body>
      <slot name="title">
        <b-card-title>{{ product.productName }}</b-card-title>
      </slot>
      <slot name="body" />
    </b-card-body>
    <b-card-footer>
      <slot name="footer" />
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" src="./card-product.scss" scoped></style>
