import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import * as rules from 'vee-validate/dist/rules'
import { ValidationProvider } from 'vee-validate'
import { ValidationObserver } from 'vee-validate'
import { extend } from 'vee-validate'
import en from 'vee-validate/dist/locale/en'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

Vue.config.productionTip = false

for (let rule in rules) {
  extend(rule, {
    ...rules[rule], 
    message: en.messages[rule] 
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
