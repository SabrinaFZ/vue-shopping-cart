import Vue from 'vue';
import VueRouter from 'vue-router';
import Container from '@/views/Container';
import Home from '@/views/Home';
import ProductInfo from '@/views/ProductInfo';
import ShoppingCart from '@/views/ShoppingCart';
import Payment from '@/views/Payment';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Container,
    meta: {
      title: 'home'
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        children: [
          {
            path: 'category',
            name: 'category',
            props: route => ({ query: route.query.category })
          }
        ]
      },
      {
        path: '/product/:id',
        name: 'product-info',
        component: ProductInfo
      },
      {
        path: '/shopping-cart',
        name: 'shopping-cart',
        component: ShoppingCart
      },
      {
        path: '/payment',
        name: 'payment',
        component: Payment,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
