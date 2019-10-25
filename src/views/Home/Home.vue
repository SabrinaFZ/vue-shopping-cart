<template>
  <div class="home">
    <b-button v-b-toggle.collapse-1 variant="primary">Filter</b-button>
    <b-collapse id="collapse-1" class="filter">
      <b-card>
        <b-form-group label="Select a category">
          <b-form-radio-group @change="selectCategory" :checked="this.$route.query.category ? this.$route.query.category : ''" class="filter__radio-group">
            <b-form-radio :value="department.department" v-for="department in departments" :key="department.id" class="filter__radio-item">{{ department.department }}</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-card>
    </b-collapse>
    <router-view :products="products" class="products"></router-view>
  </div>
</template>

<script>

import TYPES from '@/store/constants'

export default {
  name: 'Home',
  created(){
    this.$store.dispatch(TYPES.RESET_PRODUCTS);
    this.$store.dispatch(TYPES.RESET_DEPARTMENTS);
    this.$store.dispatch(TYPES.GET_PRODUCTS);
    this.$store.dispatch(TYPES.GET_DEPARTMENTS);
  },
  computed: {
    products(){
      return this.$store.getters.products;
    },
    departments(){
      return this.$store.getters.departments;
    }
  },
  watch: {
    '$route'(){
      if(this.$route.query && this.$route.query.category){
        this.$store.dispatch(TYPES.GET_PRODUCTS_BY_CATEGORY, this.$route.query.category);
      }
    }
  },
  methods: {
    selectCategory(value){
      this.$router.push({name: 'category', query: { category: value} })
    }
  }
}
</script>

<style lang="scss">
  @import './home.scss';
</style>