<template>
        <container>
            <template v-slot:content>
                <div class="product-info">
                    <card-product :product="product">
                        <template v-slot:body>
                            <b-card-text>{{ product.product }}</b-card-text>
                            <b-card-text>{{ product.department }}</b-card-text>
                        </template>
                        <template v-slot:footer>
                            <span>{{ product.price }} €</span>
                        </template>
                    </card-product>
                    <b-card bg-variant="light" class="card-selector">
                        <selector :options="[1, 2, 3, 4, 5, 6, 8, 9, 10]" label="Quantity" ref="selectorQty" @selectedValue="setQtyValue"></selector>
                        <b-button @click="addToShoppingCart">Add to cart</b-button>
                    </b-card>
                </div>
            </template>
        </container>
</template>

<script>

import TYPES from '@/store/constants'
import Container from '@/views/Container/Container'

import CardProduct from '@/components/CardProduct/CardProduct'
import Selector from '@/components/Selector/Selector'

export default {
    name: 'ProductInfo',
    components: {
        'container': Container,
        'card-product': CardProduct,
        'selector': Selector
    },
    computed: {
        product(){
            return this.$store.getters.product(this.$route.params.id);
        }
    },
    mounted(){
        this.$refs.selectorQty['value'] = 1
    },
    methods: {
        addToShoppingCart(){
            this.$store.dispatch(TYPES.ADD_SHOPPING_CART, {qty: this.$refs.selectorQty.value, product: this.product})
            this.$router.push({name: 'shopping-cart'})
        },
        setQtyValue(value){
            this.$refs.selectorQty['value'] = value
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './product-info.scss';
</style>