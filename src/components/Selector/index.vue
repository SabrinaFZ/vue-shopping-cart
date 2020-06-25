<template>
  <div class="selector">
    <b-form-group
      label-cols-sm="2"
      :label="label"
      label-align-sm="left"
      :label-for="label"
    >
      <b-form-select
        :id="label"
        ref="selector"
        :options="options"
        :value="defaultValue"
        @change="emitSelectedValue"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'Selector',
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    emitSelectedValue(value) {
      this.$emit('selectedValue', value);
    }
  }
};
</script>

<style lang="scss" src="./selector.scss" scoped></style>
