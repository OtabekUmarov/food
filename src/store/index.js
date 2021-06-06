import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    dishes: [],
    orders: [],
    reports: [],
    mostOrder: [],
    month:'',
    week:""
  },
  getters: {
    total(state) {
      let sum = 0
      state.orders.forEach(o => {
        sum += parseInt(o.narx.split('.').join(""))
      })
      return sum
    },
    getSearch(state) {
      return s=>{
        state.search = s
      }  
    },
    search(state){
      return state.search
    },
    dishess(state){
      return state.dishes.filter(l => {
        return l.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
      })
      // return state.dishes
    },
    report(state){
      return state.reports
    },
    orders(state){
      return state.orders
    },
    mostOrder(state){
      return state.mostOrder
    },
    getMonth(state){
      let d = new Date()
      var month = new Array(12);
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "Jule";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      state.month = month[d.getMonth()];
      return state.month
    },
    getWeek(state){
      let d = new Date()
      var weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      state.week = weekday[d.getDay()];
      return state.week
    }
  },
  mutations: {
    dishesAll(state,payload){
      state.dishes = payload
    },
    mostOrder(state,payload){
      state.mostOrder = payload
    },
    report(state,payload){
      state.reports = payload
    },
    order(state, payload){
      state.orders.push(payload)
    },
    getOrder(state, payload){
      state.orders = payload
    }, 
    removeOrder(state,payload){
      state.orders.splice(state.orders.findIndex(function(i){ return i.id === payload; }), 1);
    }
  },
  actions: {
    getDishes(context){
      axios.get('http://localhost:3000/dishes').then(response => {
        context.commit('dishesAll', response.data)
      })
    },
    getMostOrder(context){
      axios.get('http://localhost:3000/mostOrder').then(response => {
        context.commit('mostOrder', response.data)
      })
    },
    getReport(context){
      axios.get('http://localhost:3000/report').then(response => {
        context.commit('report', response.data)
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
    delOrder(context,id){
      axios.delete('http://localhost:3000/orders/'+id).then(response => {
        console.log(response)
        context.commit('removeOrder',id)
      })
    }
  },
  modules: {
  }
})
