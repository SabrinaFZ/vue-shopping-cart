import Vue from 'vue';
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, min, max } from 'vee-validate/dist/rules';

extend('required', {
  ...required
});

extend('min', {
  ...min
});

extend('max', {
  ...max
});

Vue.component('c-validation-provider', ValidationProvider);
Vue.component('c-validation-observer', ValidationObserver);
