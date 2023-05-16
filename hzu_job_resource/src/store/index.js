import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backToTop:function backToTop(){
      let topDistance = window.pageYOffset
      scrollBy(0, -20)
      let scrolldelay = setTimeout(backToTop, 1)
      if (topDistance === 0) {
        clearTimeout(scrolldelay);
        scrolldelay = null;
      }
    },
    n:1
  },
  getters: {
  },
  mutations: {
    alterN(state,n){
      console.log(n)
      state.n = n
      console.log(state.n)
    }
  },
  actions: {
  },
  modules: {
  }
})
