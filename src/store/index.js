import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import control from './modules/control'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    api,
    control,
    user
  }
})
