import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state';
import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
