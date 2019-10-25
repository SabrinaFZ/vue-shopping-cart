<template>
    <div class="product-list">
        <card-product :product="product" v-for="product in products" :key="product.id">
            <template v-slot:title>
                        <router-link :to="{name: 'product-info', params: {id: product.id} }"><b-card-title>{{ product.productName }}</b-card-title></router-link>
                    </template>
            <template v-slot:footer>
                <span>{{ product.price }} €</span>
            </template>
        </card-product>
    </div>
</template>

<script>
import CardProduct from '@/components/CardProduct/CardProduct'

export default {
    name: 'ProductList',
    components: {
        'card-product': CardProduct
    },
    props: {
        products: Array
    }
}
</script>

<style lang="scss" scoped>
    @import './products-list.scss';
</style>