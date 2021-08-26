import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player:1 ,
    crossWin:0 ,
    circleWin:0
  },
  mutations: {
    CHANGE(state){
      state.player = -state.player 
    },

    RESTART(state, num){
      state.player = num
    },

    CIRCLEWIN(state, num){
      state.circleWin += num
    },

    CROSSWIN(state, num){
      state.crossWin += num
    }
  },
  actions: {
    changePlayer(context, status){}
  },
  modules: {
  }
})
