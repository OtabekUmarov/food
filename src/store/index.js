import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    dishes: []
  },
  getters: {
    getSearch(state) {
      return s=>{
        state.search = s
      }  
    },
    search(state){
      return state.search
    },
    dishess(state){
      return state.dishes
    }
  },
  mutations: {
    dishesAll(state,payload){
      state.dishes = payload
    }
  },
  actions: {
    getDishes(context){
      axios.get('http://localhost:3000/dishes').then(response => {
        context.commit('dishesAll', response.data)
      })
    }
  },
  modules: {
  }
})
