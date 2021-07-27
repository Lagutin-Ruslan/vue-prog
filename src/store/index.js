import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allOfers: [],
    showOffer: false,
    text: 'Загрузить список товаров',
  },
  mutations: {
   LOAD_OFFERS(state) {
      const axios = require("axios");
      state.showOffer = !state.showOffer
      state.showOffer ? state.text = 'Скрыть список товаров' : state.text = 'Загрузить список товаров'
      axios
      .get("https://api.affstar.com/api/public/offers")
      .then((response) => {
        state.allOfers = response.data;
        console.log(state.allOfers);
      })
      .catch((error) => console.log(error));
    }
  },
  actions: {
    SHOW_OFFERS({commit}) {
      commit('LOAD_OFFERS')
    }
  },
  getters: {
    ONE_STATE(state) {
      return state.allOfers
    },
    ONE_STATE_SHOWOFFERS(state) {
      return state.showOffer
    },
    ONE_STATE_TEXT(state) {
      return state.text
    },
  }
})
