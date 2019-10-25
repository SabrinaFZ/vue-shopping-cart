<template>
    <b-card
        img-src="https://chicago.cbslocal.com/wp-content/uploads/sites/15116062/2014/09/loading.gif"
        img-alt="Image"
        img-top
        no-body
    >
        <b-card-body>
            <slot name="title">
                <b-card-title>{{ product.productName }}</b-card-title>
            </slot>
            <slot name="body"></slot>
        </b-card-body>
        <b-card-footer>
            <slot name="footer"></slot>
        </b-card-footer>
    </b-card>
</template>

<script>
export default {
    name: 'CardProducts',
    props: {
        product: Object
    }
}
</script>