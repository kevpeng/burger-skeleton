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
    category: 0,
    itemlist: {},
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
    },
    
    //TODO maybe switchCategory and switchList can removed
    switchCategory: function (store, category){
      store.category = category;
    },
    switchList: function (store, itemlist){
      store.itemlist = itemlist;
    }
  },
  actions: {

  }
})
