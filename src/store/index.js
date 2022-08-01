import { createStore } from 'vuex'

export default createStore({
  state: {
    shuffleArr: [],
    dynamicArr: [],
  },
  getters: {
  },
  mutations: {
    getShuffleArr(state, parameter) {
      state.shuffleArr = parameter;
    },
    getDynamicArr(state, parameter) {
      state.dynamicArr = parameter;
    },
  },
  actions: {
  },
  modules: {
  },
})
