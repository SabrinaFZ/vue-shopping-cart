<template>
    <div class="shopping-cart">
        <div class="products" v-if="shoppingCart.length">
                <card-product v-for="product in shoppingCart" :key="product.id" :product="product">
                        <template v-slot:title>
                            <router-link :to="{name: 'product-info', params: {id: product.id} }"><b-card-title>{{ product.productName }}</b-card-title></router-link>
                        </template>
                    <template v-slot:body>
                        <b-card-text><selector :options="[1, 2, 3, 4, 5, 6, 8, 9, 10]" :defaultValue="parseInt(product.quantity)" label="Qty" @selectedValue="setQtyValue(product, ...arguments)"></selector></b-card-text>
                        <b-button variant="danger" @click="deleteProduct(product)"><font-awesome-icon icon="times-circle"></font-awesome-icon></b-button>
                    </template>
                    <template v-slot:footer>
                        <b-card-text>{{ product.price * product.quantity }} €</b-card-text>
                    </template>
                </card-product>
            </div>
            <b-card
                title="Payment Resume"
                v-if="shoppingCart.length"
            >
                <b-card-body>
                    <b-card-text class="shopping-cart-resume">
                        <ul>
                            <li  v-for="product in shoppingCart" :key="product.id"  class="shopping-cart-resume__product">
                                <span class="shopping-cart-resume__product-name">{{ product.productName}} ({{ product.quantity }})</span>
                                <span class="shopping-cart-resume__product-price">{{ product.price * product.quantity }} €</span>
                            </li>
                        </ul>
                        <hr>
                        <p class="shopping-cart-resume__total">
                            <span>{{ totalPrice }} €</span>
                        </p>
                        <b-button variant="primary" class="shopping-cart-resume__pay" @click="goToPaymentProcess">Pay</b-button>
                    </b-card-text>
                </b-card-body>
            </b-card>
    </div>
</template>

<script>
import TYPES from '@/store/constants'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimesCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import CardProduct from '@/components/CardProduct/CardProduct'
import Selector from '@/components/Selector/Selector'

library.add(faTimesCircle, faPencilAlt)

export default {
    name: 'ShoppingCart',
    components: {
        'card-product': CardProduct,
        'font-awesome-icon': FontAwesomeIcon,
        'selector': Selector
    },
    computed: {
        shoppingCart(){
            return this.$store.getters.shoppingCart;
        },
        totalPrice(){
            let price = 0;
            if(this.$store.getters.shoppingCart.length){
                this.$store.getters.shoppingCart.forEach(product => {
                    price += product.price * product.quantity;
                })
            }

            return price;
        }
    },
    methods: {
        goToPaymentProcess(){
            this.$router.push({ name: 'payment', params: { totalPrice: this.totalPrice } })
        },
        deleteProduct(product){
            this.$store.dispatch(TYPES.DELETE_PRODUCT_SHOPPING_CART, product);
        },
        setQtyValue(product, value){
            //this.$refs.selectorQty['value'] = value
            this.$store.dispatch(TYPES.MODIFY_QTY_PRODUCT_SHOPPING_CART, {qty: value, product});
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './shopping-cart.scss';
</style>