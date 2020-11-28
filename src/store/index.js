import Vue from 'vue'
import Vuex from 'vuex'
import Glavnaya from "@/store/modules/Glavnaya";
import Stages from "@/store/modules/Stages";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false
  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    Glavnaya,
    Stages,
  }
})
