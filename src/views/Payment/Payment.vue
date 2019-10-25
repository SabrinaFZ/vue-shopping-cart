<template>
    <div class="payment">
        <b-card bg-variant="dark" text-variant="white">
            <b-card-text>
                Total: {{ totalPrice }} € 
            </b-card-text>
        </b-card>
        <validation-observer ref="observer" tag="form" v-slot="{ invalid }" class="form">
            <shipping-address></shipping-address>
            <payment-method></payment-method>
            <b-button variant="primary" class="payment__pay" @click="finishPaymentProcess" :disabled="invalid">Pay</b-button>
        </validation-observer>
    </div>
</template>

<script>

import TYPES from '@/store/constants'
import ShippingAdress from './FormShippingAddress'
import PaymentMethod from './FormPaymentMethod'

export default {
    name: 'Payment',
    props: {
        totalPrice: Number
    },
    components: {
        'shipping-address': ShippingAdress,
        'payment-method': PaymentMethod
    },
    methods: {
        async finishPaymentProcess(){
            const isValid = await this.$refs.observer.validate();

            if(isValid){
                this.$store.dispatch(TYPES.RESET_SHOPPING_CART);
                this.$router.push({name: 'home'});
            }
        }
    }
}
</script>

<style lang="scss">
    @import './payment.scss';
</style>