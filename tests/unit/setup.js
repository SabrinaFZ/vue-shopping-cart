import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

Vue.use(BootstrapVue);
Vue.component('c-validation-provider', ValidationProvider);
Vue.component('c-validation-observer', ValidationObserver);
