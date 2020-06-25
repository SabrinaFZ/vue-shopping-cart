import Vue from 'vue';
import App from '@/views/App';
import router from './router';
import store from './store';

// PLUGINS
import './plugins/axios';
import './plugins/bootstrap-vue';

// STYLES
import '@/styles/styles.scss';

// GLOBAL COMPONENTS
import '@/setup/icons';
import '@/setup/globalComponents';
import '@/setup/validations';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
