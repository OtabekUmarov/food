import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    dishes: [],
    orders: []
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
      // return state.dishes.filter(l => {
      //   return l.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      // })
      return state.dishes
    },
    orders(state){
      return state.orders
    }
  },
  mutations: {
    dishesAll(state,payload){
      state.dishes = payload
    },
    order(state, payload){
      state.orders.push(payload)
    },
    getOrder(state, payload){
      state.orders = payload
    }
  },
  actions: {
    getDishes(context){
      axios.get('http://localhost:3000/dishes').then(response => {
        context.commit('dishesAll', response.data)
      })
    },
    orders(context,order){
      axios.post('http://localhost:3000/orders',order).then(response => {
        context.commit('order',response.data)
      })
    },
    getOrders(context){
      axios.get('http://localhost:3000/orders').then(response => {
        context.commit('getOrder',response.data)
      })
    },
  },
  modules: {
  }
})
