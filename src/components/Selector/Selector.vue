<template>
    <b-form-group
        label-cols-sm="2"
        :label="label"
        label-align-sm="left"
        :label-for="label"
    >
        <b-form-select :id="label" :options="options" ref="selector" @change="emitSelectedValue" :value="defaultValue ? defaultValue : options[0]"></b-form-select>
    </b-form-group>
</template>

<script>
export default {
    name: 'Selector',
    props: {
        label: String,
        options: Array,
        defaultValue: Number
    },
    methods: {
        emitSelectedValue(value){
            this.$emit('selectedValue', value)
        }
    }
}
</script>