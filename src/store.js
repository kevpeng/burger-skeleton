import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: io(),
    hello: "Hello World!",
    uiLabels: {},
    lang: "en",
    paymentWaitingState: "",
    paymentFinishedState: "",
  },
  getters: {
    getSocket: state => state.socket
  },
  mutations: {
    changeHello: function(state, msg){
      state.hello = msg;
    },
    setUiLabels: function(store, labels){
      store.uiLabels = labels;
    },
    switchLang: function (store, lang){
      store.lang = lang;
    }
  },
  actions: {

  }
})
