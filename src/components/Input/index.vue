<template>
  <b-form-group
    :label="label"
    :label-for="label"
    class="input"
  >
    <c-validation-provider
      v-slot="{ errors }"
      :name="label"
      :rules="rules"
    >
      <b-form-input
        :id="id"
        :type="type"
        :value="defaultValue"
        :placeholder="placeholder"
        @input="onInput"
      />
      <span v-if="errors.length" class="input__error">{{ errors[0] }}</span>
    </c-validation-provider>
  </b-form-group>
</template>

<script>
export default {
  name: 'Input',
  props: {
    id: {
      type: String,
      default: '',
      require: true
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: 'text',
      validator:
        value => ['text', 'number', 'email', 'tel', 'password'].indexOf(value) !== -1
    },
    rules: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    }
  }
};
</script>

<style lang="scss" src="./input.scss"></style>
