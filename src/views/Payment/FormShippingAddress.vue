<template>
    <b-card bg-variant="light">
        <b-form-group
            label-cols-lg="3"
            label="Shipping Address"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
        >
            <b-form-group
            label="Street"
            label-for="payment__street"
            >
            <validation-provider name="street" :rules="{ required: true, max: 20 }"  v-slot="{ errors }">
                <b-form-input id="payment__street" @keyup="changeShippingAdress($event, 'street')" :value="shippingAddress['street']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>

            <b-form-group
            label="City"
            label-for="payment__city"
            >
            <validation-provider name="city" :rules="{ required: true, max: 20 }"  v-slot="{ errors }">
                <b-form-input id="payment__city" @keyup="changeShippingAdress($event, 'city')" :value="shippingAddress['city']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>

            <b-form-group
            label="State"
            label-for="payment__state"
            >
            <validation-provider name="state" :rules="{ required: true, max: 20 }"  v-slot="{ errors }">
                <b-form-input id="payment__state" @keyup="changeShippingAdress($event, 'state')" :value="shippingAddress['state']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>

            <b-form-group
            label="Country"
            label-for="payment__country"
            >
            <validation-provider name="country" :rules="{ required: true, max: 20 }"  v-slot="{ errors }">
                <b-form-input id="payment__country" @keyup="changeShippingAdress($event, 'country')" :value="shippingAddress['country']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>
        </b-form-group>
    </b-card>
</template>

<script>
import TYPES from '@/store/constants'

export default {
    name: 'ShippingAddress',
    computed: {
        shippingAddress(){
            return this.$store.getters.shippingAddress;
        }
    },
    methods: {
        changeShippingAdress(e, field){
            this.$store.dispatch(TYPES.CHANGE_SHIPPING_ADDRESS, { field, value: e.target.value });
        }
    }
}
</script>