<template>
  <div class="home">
    <b-button v-b-toggle.collapse-1 variant="primary">
      Filter
    </b-button>
    <b-collapse id="collapse-1" class="filter">
      <b-card>
        <b-form-group label="Select a category">
          <b-form-radio-group
            :checked="this.$route.query.category ? this.$route.query.category : ''"
            class="filter__radio-group"
            @change="selectCategory"
          >
            <b-form-radio
              v-for="department in departments"
              :key="department.id"
              :value="department.department"
              class="filter__radio-item"
            >
              {{ department.department }}
            </b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-card>
    </b-collapse>
    <c-product-list :products="products" class="products" />
  </div>
</template>

<script>

import {
  GET_PRODUCTS_BY_CATEGORY,
  RESET_PRODUCTS,
  RESET_DEPARTMENTS,
  GET_PRODUCTS,
  GET_DEPARTMENTS
} from '@/store/constants';

export default {
  name: 'Home',
  computed: {
    products() {
      return this.$store.getters['products/dataProducts']('products');
    },
    departments() {
      return this.$store.getters['departments/dataDepartments']('departments');
    }
  },
  watch: {
    $route() {
      if (this.$route.query && this.$route.query.category) {
        this.$store.dispatch(`products/${GET_PRODUCTS_BY_CATEGORY}`, this.$route.query.category);
      }
    }
  },
  created() {
    this.$store.dispatch(`products/${RESET_PRODUCTS}`);
    this.$store.dispatch(`products/${GET_PRODUCTS}`);
    this.$store.dispatch(`departments/${RESET_DEPARTMENTS}`);
    this.$store.dispatch(`departments/${GET_DEPARTMENTS}`);
  },
  methods: {
    selectCategory(value) {
      this.$router.push({ name: 'category', query: { category: value } });
    }
  }
};
</script>

<style lang="scss" src="./home.scss">
</style>
