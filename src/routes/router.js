import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import ProductList from '@/views/ProductList/ProductList.vue'
import ProductInfo from '@/views/ProductInfo/ProductInfo.vue'
import ShoppingCart from '@/views/ShoppingCart/ShoppingCart.vue'
import Payment from '@/views/Payment/Payment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'category',
          name: 'category',
          component: ProductList,
          props: (route) => ({ query: route.query.category })
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
})
