import Vue from 'vue';

Vue.component('c-card-product', () => import(
  /* webpackChunkName: 'components/card-product' */ '@/components/CardProduct'
));

Vue.component('c-input', () => import(
  /* webpackChunkName: 'components/input' */ '@/components/Input'
));

Vue.component('c-product-list', () => import(
  /* webpackChunkName: 'components/product-list' */ '@/components/ProductList'
));

Vue.component('c-selector', () => import(
  /* webpackChunkName: 'components/selector' */ '@/components/Selector'
));
