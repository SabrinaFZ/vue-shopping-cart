<template>
    <b-card bg-variant="light">
        <b-form-group
            label-cols-lg="3"
            label="Payment Method"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
        >
            <b-form-group
            label="Placeholder Name"
            label-for="payment__placeholder"
            >
            <validation-provider name="placeholder" :rules="{ required: true, max: 20 }"  v-slot="{ errors }">
                <b-form-input id="payment__placeholder" @keyup="changePaymentMethod($event, 'placeholder')" :value="paymentMethod['placeholder']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>

            <b-form-group
            label="Number Card"
            label-for="payment__number-card"
            >
            <validation-provider name="numberCard" :rules="{ required: true,  numeric:true, min:8,max:12 }"  v-slot="{ errors }">
                <b-form-input id="payment__number-card" name="numberCard" @keyup="changePaymentMethod($event, 'numberCard')" :value="paymentMethod['numberCard']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>

            <b-form-group
            label="Expiration Date"
            label-for="payment__date"
            >
            <div id="payment__date">
                <validation-provider name="month" :rules="{ required: true,  numeric:true }"  v-slot="{ errors }">
                    <b-form-input id="payment__date_month"  @keyup="changePaymentMethod($event, 'expirationDateMonth')" maxlength="2" placeholder="MM" :value="paymentMethod['expirationDateMonth']"></b-form-input>
                    <span class="payment__form_error">{{ errors[0] }}</span>
                </validation-provider>
                <span class="payment__date_separator">/</span>
                <validation-provider name="year" :rules="{ required: true,  numeric:true }"  v-slot="{ errors }">
                    <b-form-input id="payment__date_year"  @keyup="changePaymentMethod($event, 'expirationDateYear')" maxlength="2" placeholder="YY" :value="paymentMethod['expirationDateYear']"></b-form-input>
                    <span class="payment__form_error">{{ errors[0] }}</span>
                </validation-provider>
            </div>
            </b-form-group>

            <b-form-group
            label="CVC"
            label-for="payment__cvc"
            >
            <validation-provider name="cvc" :rules="{ required: true,  numeric:true, min:3,max:3 }"  v-slot="{ errors }">
                <b-form-input id="payment__cvc"  @keyup="changePaymentMethod($event, 'cvc')" :value="paymentMethod['cvc']"></b-form-input>
                <span class="payment__form_error">{{ errors[0] }}</span>
            </validation-provider>
            </b-form-group>
        </b-form-group>
    </b-card>
</template>

<script>

import TYPES from '@/store/constants'

export default {
    name: 'PaymentMethod',
    computed: {
        paymentMethod(){
            return this.$store.getters.paymentMethod;
        }
    },
    methods: {
        changePaymentMethod(e, field){
            this.$store.dispatch(TYPES.CHANGE_PAYMENT_METHOD, { field, value: e.target.value });
        }
    }
}
</script>