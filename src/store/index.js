import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '0',
    filter: '',
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
      state.dishes.forEach(d => {
        state.orders.forEach(o => {
          if(o.id == d.id){
            sum += d.price*1*d.count
          }
        })
      })
      sum = sum.toFixed(2)
      return sum
    },
    getSearch(state) {
      return s=>{
        state.search = s
      }  
    },
    getFilter(state) {
      return s=>{
        state.filter = s
      }  
    },
    search(state){
      return state.search
    },
    dishess(state){
      return state.dishes.filter(l => {
        return l.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
                // && l.category.indexOf(state.filter) !==-1
      })
      // return state.dishes
    },
    categoryDishess(state){
      return state.dishes.filter(l => {
        if(state.filter == 'hot')
          return l
        else
          return l.category.indexOf(state.filter) !==-1
      })
      // return state.dishes
    },
    // countSum(state){
    //   return state.orders.forEach( order => {
    //     order.price = order.price*order.count
    //   })
    // },
    report(state){
      return state.reports
    },
    orders(state){
      let arr = []
      state.dishes.forEach(d => {
        state.orders.forEach(o => {
          if(o.id == d.id){
            d.count = o.count
            arr.push(d)
          }
        })
      })
      return arr
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
    newDish(state, payload){
      state.dishes.push(payload)
    },
    saveDish(state, payload){
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
    updateOrder(state, payload){
      state.orders = payload
    }, 
    removeOrder(state,payload){
      state.orders.splice(state.orders.findIndex(function(i){ return i.id === payload; }), 1);
    },
    removeDish(state,payload){
      state.dishes.splice(state.dishes.findIndex(function(i){ return i.id === payload; }), 1);
    },
  },
  actions: {
    getDishes(context){
      axios.get('http://localhost:3000/dishes').then(response => {
        context.commit('dishesAll', response.data)
      })
    },
    newsDish(context, news){
      axios.post('http://localhost:3000/dishes',news).then(response => {
        context.commit('newDish', response.data)
      })
    },
    saveDish(context, save){
      axios.put('http://localhost:3000/dishes/'+save.id,save).then(response => {
        context.commit('saveDish', response.data)
      })
    },
    delDish(context,del){
      axios.delete('http://localhost:3000/dishes/'+del.id).then(response => {
        console.log(response)
        context.commit('removeDish',del.id)
      })
    },
    // writeOrders(context,order){
    //   let w = 
    //   axios.delete('http://localhost:3000/dishes/'+del.id).then(response => {
    //     console.log(response)
    //     context.commit('removeDish',del.id)
    //   })
    // },
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
      // axios.get('http://localhost:3000/orders').then(response => {
      //   response.data.find(i => {
      //       if(i.id == order.id){
      //         console.log('salom');
      //         order.count++
      //         axios.put('http://localhost:3000/orders/'+order.id,order).then(response => {
      //           context.commit('updateOrder',response.data)
      //         })
      //       }
      //         else {
                axios.post('http://localhost:3000/orders',order).then(response => {
                  context.commit('order',response.data)
      //           })
      //         }      
      //   })
        // context.commit('order',response.data)
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
