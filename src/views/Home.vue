<template>
  <div class="home-wrap" :class='{dark:modal}'>
    <div class="home">
      <div class="container">
        <div class="head">
          <div class="left">
            <div class="title">
              Jaegar Resto
            </div>
            <div class="data">
              {{getWeek}}, {{ new Date().getDate() }}  {{getMonth}} {{ new Date().getFullYear() }}
            </div>
          </div>
          <div class="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"  viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input type="text" tabindex="1" @input="searchInp()" id="search" v-model="search" placeholder="Search for food, coffe, etc..">
            <span class="slash">/</span>
            <div class="search-dish">
              <div class="item" @click="add(d)" v-for="d of dishes" :key="d.id">
                <div class="img">
                  <img :src="require(`../assets/img/${d.img}.png`)" alt="">
                </div>
                <div class="search-title">
                  {{d.title}}
                </div>
                <div class="price">$ {{d.price}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="btns">
          <button @click="filtr('hot'), b=0" class="filter-btn" :class='{active: b==0}'>Hot Dishes</button>
          <button @click="filtr('cold'), b=1" class="filter-btn" :class='{active: b==1}'>Cold Dishes</button>
          <button @click="filtr('soup'), b=2" class="filter-btn" :class='{active: b==2}'>Soup</button>
          <button @click="filtr('grill'), b=3" class="filter-btn" :class='{active: b==3}'>Grill</button>
          <button @click="filtr('appetizer'), b=4" class="filter-btn" :class='{active: b==4}'>Appetizer</button>
          <button @click="filtr('dessert'), b=5" class="filter-btn" :class='{active: b==5}'>Dessert</button>
        </div>
        <div class="menu">
          <div class="menu-head">
            <div class="titles">
              Choose Dishes
            </div>
            <div class="select">
              <select>
                <option value="" selected>Dine In</option>
                <option value="togo">To Go</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div class="dishes">
          <div class="row">
            <div class="col-3 col-md-4  col-md-6" v-for="dishe of categoryDishes" :key="dishe.id">
              <div class="dish">
                  <div class="img">
                    <img :src="require(`../assets/img/`+dishe.img+`.png`)" alt="">
                  </div>
                  <div class="title">{{dishe.title}}</div>
                  <div class="bottom">
                    <div class="price">$ {{dishe.price}}</div>
                    <div class="bowl">{{dishe.bowl}}  Bowls available</div>
                  </div>
                  <div class="btn-dish">
                    <button @click="add(dishe)">Save</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="orders">
        <div class="header">
          <div class="top">
            <span>Orders <span>#34562</span></span>
          </div>
          <div class="orders-btns">
            <button @click="a=0" :class='{active: a==0}'>Dine In</button>
            <button @click="a=1" :class='{active: a==1}'>To Go</button>
            <button @click="a=2" :class='{active: a==2}'>Delivery</button>
          </div>
          <div class="orders-item">
            <div class="row">
              <div class="col-10 jcsb">
                <button>Item</button>
                <button>Qty</button>
              </div>
              <div class="col-2" style="text-align: right">
                <button>Price</button
                ></div>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="row" v-for="order of getOrders" :key="order.id">
            <div class="col-10 jcsb" style="margin-bottom:10px;">
              <div class="order-name">
                <div class="img">
                  <img :src="require(`../assets/img/${order.img}.png`)" alt="">
                </div>
                <div class="title">
                  <span class="text">{{order.title}}</span>
                  <span class="price">$ {{order.price}}</span>
                </div>
              </div>
              <div class="order-count">{{order.count}}</div>
            </div>
            <div class="col-2">
              <div class="order-sum">${{order.price}}</div>
            </div>
            <div class="col-10">
              <input class="order-note" type="text" placeholder="Order Note...">
            </div>
            <div class="col-2">
              <button class="order-delete" @click="del(order)"><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7325 6.26564L13.8153 6.26677C14.1229 6.2922 14.3587 6.54759 14.375 6.855L14.3671 7.02641L14.105 10.2358L13.8301 13.3678C13.7719 13.993 13.7198 14.5204 13.6749 14.9355C13.5187 16.3823 12.5796 17.2769 11.1638 17.3034C8.95781 17.3441 6.83731 17.3437 4.7781 17.2992C3.40331 17.2703 2.47805 16.366 2.32462 14.9414L2.21858 13.8918L2.03328 11.8558L1.84347 9.62168L1.62643 6.93986C1.59946 6.59578 1.84959 6.29442 2.18512 6.26676C2.49269 6.2414 2.76525 6.45483 2.82932 6.7556L2.85426 7.0014L3.05805 9.51556L3.28057 12.1215C3.38038 13.2496 3.46695 14.1626 3.53622 14.804C3.62365 15.6158 4.05115 16.0336 4.80343 16.0494C6.84654 16.0936 8.95123 16.094 11.1417 16.0535C11.9398 16.0386 12.374 15.6249 12.4633 14.7978L12.5689 13.7538C12.5998 13.4321 12.6328 13.0769 12.6678 12.691L12.8905 10.1281L13.1588 6.83954C13.1836 6.52414 13.4327 6.28238 13.7325 6.26564ZM1.10949 4.82428C0.772879 4.82428 0.5 4.54445 0.5 4.19926C0.5 3.88283 0.729294 3.62133 1.02679 3.57994L1.10949 3.57423H3.76476C4.0803 3.57423 4.35654 3.36602 4.45535 3.06604L4.47953 2.9734L4.68587 1.92106C4.86759 1.2241 5.45767 0.72787 6.14916 0.671902L6.27993 0.666626H9.7199C10.4229 0.666626 11.0436 1.12186 11.2826 1.82528L11.3228 1.96003L11.5203 2.97315C11.5822 3.29056 11.8354 3.52762 12.1417 3.5681L12.2351 3.57423H14.8905C15.2271 3.57423 15.5 3.85406 15.5 4.19926C15.5 4.51568 15.2707 4.77719 14.9732 4.81857L14.8905 4.82428H1.10949ZM9.7199 1.91667H6.27993C6.10892 1.91667 5.95691 2.01931 5.89377 2.14831L5.87235 2.20499L5.67483 3.21861C5.65067 3.34233 5.61566 3.46146 5.57093 3.57506L10.429 3.57522C10.4011 3.50434 10.377 3.43132 10.3569 3.35636L10.325 3.21836L10.1364 2.24396C10.0923 2.07489 9.95612 1.95111 9.79185 1.92281L9.7199 1.91667Z" fill="#FF7CA3"/>
                </svg>
                </button>
            </div>
          </div>
        </div>
        <div class="discount">
          <span class="left">Discount</span>
          <span class="right">0 $</span>
        </div>
        <div class="total">
          <span class="left">Sub total</span>
          <span class="right">$ {{subTotal}}</span>
        </div>
        <div class="payment">
          <button @click="modal = !modal">Continue to Payment</button>
        </div>
      </div>
      <div class="confirmation" :class='{show:modal}'>
        <div class="lefts">
          <div class="top">
            <div>
            <div class="confir__title">
              Confirmation
            </div>
            <div class="confir__info">
              Orders #34562
            </div>
          </div>
          <div class="btn">
            <button><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1.5V9M9 16.5V9M9 9H16.5M9 9H1.5" stroke="#EA7C69" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          </div>
          <div class="order">
          <div class="row" v-for="order of getOrders" :key="order.id" style="margin-bottom:24px;">
            <div class="col-10 jcsb" style="margin-bottom:10px;">
              <div class="order-name">
                <div class="img">
                  <img :src="require(`../assets/img/${order.img}.png`)" alt="">
                </div>
                <div class="title">
                  <span class="text">{{order.title}}</span>
                  <span class="price">$ {{order.price}}</span>
                </div>
              </div>
              <div class="order-count">{{order.count}}</div>
            </div>
            <div class="col-2">
              <div class="order-sum">${{order.price}}</div>
            </div>
            <div class="col-10">
              <input class="order-note" type="text" placeholder="Order Note...">
            </div>
            <div class="col-2">
              <button class="order-delete" @click="del(order)"><svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7325 6.26564L13.8153 6.26677C14.1229 6.2922 14.3587 6.54759 14.375 6.855L14.3671 7.02641L14.105 10.2358L13.8301 13.3678C13.7719 13.993 13.7198 14.5204 13.6749 14.9355C13.5187 16.3823 12.5796 17.2769 11.1638 17.3034C8.95781 17.3441 6.83731 17.3437 4.7781 17.2992C3.40331 17.2703 2.47805 16.366 2.32462 14.9414L2.21858 13.8918L2.03328 11.8558L1.84347 9.62168L1.62643 6.93986C1.59946 6.59578 1.84959 6.29442 2.18512 6.26676C2.49269 6.2414 2.76525 6.45483 2.82932 6.7556L2.85426 7.0014L3.05805 9.51556L3.28057 12.1215C3.38038 13.2496 3.46695 14.1626 3.53622 14.804C3.62365 15.6158 4.05115 16.0336 4.80343 16.0494C6.84654 16.0936 8.95123 16.094 11.1417 16.0535C11.9398 16.0386 12.374 15.6249 12.4633 14.7978L12.5689 13.7538C12.5998 13.4321 12.6328 13.0769 12.6678 12.691L12.8905 10.1281L13.1588 6.83954C13.1836 6.52414 13.4327 6.28238 13.7325 6.26564ZM1.10949 4.82428C0.772879 4.82428 0.5 4.54445 0.5 4.19926C0.5 3.88283 0.729294 3.62133 1.02679 3.57994L1.10949 3.57423H3.76476C4.0803 3.57423 4.35654 3.36602 4.45535 3.06604L4.47953 2.9734L4.68587 1.92106C4.86759 1.2241 5.45767 0.72787 6.14916 0.671902L6.27993 0.666626H9.7199C10.4229 0.666626 11.0436 1.12186 11.2826 1.82528L11.3228 1.96003L11.5203 2.97315C11.5822 3.29056 11.8354 3.52762 12.1417 3.5681L12.2351 3.57423H14.8905C15.2271 3.57423 15.5 3.85406 15.5 4.19926C15.5 4.51568 15.2707 4.77719 14.9732 4.81857L14.8905 4.82428H1.10949ZM9.7199 1.91667H6.27993C6.10892 1.91667 5.95691 2.01931 5.89377 2.14831L5.87235 2.20499L5.67483 3.21861C5.65067 3.34233 5.61566 3.46146 5.57093 3.57506L10.429 3.57522C10.4011 3.50434 10.377 3.43132 10.3569 3.35636L10.325 3.21836L10.1364 2.24396C10.0923 2.07489 9.95612 1.95111 9.79185 1.92281L9.7199 1.91667Z" fill="#FF7CA3"/>
                </svg>
                </button>
            </div>
          </div>
          </div>
           <div class="discount">
          <span class="left">Discount</span>
          <span class="right">0 $</span>
        </div>
        <div class="total">
          <span class="left">Sub total</span>
          <span class="right">$ {{subTotal}}</span>
        </div>
        </div>
        <div class="rights">
          <div class="top">
            <div class="confir__title">
              Payment
            </div>
            <div class="confir__info">
              3 payment method available
            </div>        
          </div>
          <div class="method">
            Payment Method  
          </div>  
          <div class="card-btn">
            <button @click="c=0" :class='{active:c==0}'>
              <span>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.688 0.5C17.8978 0.5 20.5 3.16116 20.5 6.44374V13.5563C20.5 16.8388 17.8978 19.5 14.688 19.5H6.31204C3.10219 19.5 0.5 16.8388 0.5 13.5563V6.44374C0.5 3.16116 3.10219 0.5 6.31204 0.5H14.688ZM14.688 1.98651H6.31204C3.90498 1.98651 1.95358 3.98213 1.95358 6.44374V13.5563C1.95358 16.0179 3.90498 18.0135 6.31204 18.0135H14.688C17.095 18.0135 19.0464 16.0179 19.0464 13.5563L19.046 13.279L15.8499 13.2798C14.0084 13.2787 12.5159 11.7531 12.5147 9.86949C12.5147 8.04914 13.9101 6.56244 15.6673 6.46431L15.8504 6.45916L19.046 6.459L19.0464 6.44374C19.0464 4.05454 17.2081 2.10431 14.8991 1.99165L14.688 1.98651ZM19.046 7.945L15.8508 7.94567C14.8109 7.94632 13.9683 8.80743 13.9683 9.86904C13.9689 10.8811 14.7329 11.7102 15.7033 11.7874L15.8504 11.7933L19.046 11.793V7.945ZM16.2942 9.06518C16.6956 9.06518 17.021 9.39795 17.021 9.80844C17.021 10.1847 16.7475 10.4957 16.3928 10.5449L16.2942 10.5517H15.9921C15.5907 10.5517 15.2653 10.2189 15.2653 9.80844C15.2653 9.43215 15.5388 9.12118 15.8935 9.07196L15.9921 9.06518H16.2942ZM10.8539 4.99736C11.2553 4.99736 11.5807 5.33013 11.5807 5.74062C11.5807 6.1169 11.3073 6.42788 10.9525 6.47709L10.8539 6.48388H5.62203C5.22063 6.48388 4.89524 6.15111 4.89524 5.74062C4.89524 5.36434 5.16866 5.05337 5.5234 5.00415L5.62203 4.99736H10.8539Z" fill="#ABBBC2"/>
                  </svg>
              </span>  
              <span>
                Cash
              </span>
            </button>  
            <button @click="c=1" :class='{active:c==1}'>
              <span>
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5.2C16.7 6.2 17.5 8 17.5 10C17.5 12.5 15 14.5 12.5 14.5H9.9L9.3 18.1C9.25325 18.3293 9.12758 18.5349 8.94486 18.6811C8.76214 18.8272 8.53395 18.9047 8.3 18.9H5.6C5.52501 18.9015 5.45064 18.8861 5.38239 18.855C5.31415 18.8239 5.25378 18.7778 5.20577 18.7202C5.15775 18.6626 5.12331 18.5949 5.105 18.5222C5.08669 18.4494 5.08498 18.3735 5.1 18.3L5.3 16.9M7.5 11H10C12.5 11 15 8.5 15 6C15 3 13.1 1 10 1H4.5C4 1 3.5 1.5 3.5 2L1.5 16C1.5 16.5 2 17 2.5 17H5.3L6.5 12C6.6 11.4 6.9 11 7.5 11Z" stroke="#ABBBC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>  
              <span>
                Paypal
              </span>
            </button>  
            <button @click="c=2" :class='{active:c==2}'>
              <span>
                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 5C0.75 2.37665 2.87665 0.25 5.5 0.25H17.5C20.1234 0.25 22.25 2.37665 22.25 5V11C22.25 13.6234 20.1234 15.75 17.5 15.75H5.5C2.87665 15.75 0.75 13.6234 0.75 11V5ZM2.33697 4.25H20.663C20.3245 2.81665 19.0368 1.75 17.5 1.75H5.5C3.96321 1.75 2.67555 2.81665 2.33697 4.25ZM20.75 5.75H2.25V11C2.25 12.7949 3.70507 14.25 5.5 14.25H17.5C19.2949 14.25 20.75 12.7949 20.75 11V5.75ZM12.75 11C12.75 10.5858 13.0858 10.25 13.5 10.25H17.5C17.9142 10.25 18.25 10.5858 18.25 11C18.25 11.4142 17.9142 11.75 17.5 11.75H13.5C13.0858 11.75 12.75 11.4142 12.75 11Z" fill="white"/>
                </svg>
              </span>  
              <span>
                Cash
              </span>
            </button>  
          </div>
          <div class="confir__input">
            <label for="">Cardholder Name</label>
            <input type="text" placeholder="Levi Ackerman">
            <label for="">Card Number</label>
            <input type="number" placeholder="2564 1421 0897 1244">
            <div class="row" style="border-bottom:1px solid #393C49;">
              <div class="col-6">
                <label for="">Expiration Date</label>
              <input type="date" placeholder="Levi Ackerman">
              </div>
              <div class="col-6">
                <label for="">CVV</label>
              <input type="password" placeholder="Levi Ackerman">
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <label for="">Order Type</label>
                <select class="select">
                <option value="" selected>Dine In</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              </div>
              <div class="col-6">
                <label for="">Table no.</label>
                <input type="text" placeholder="140">
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <button class="foot-btn"  @click="modal=!modal">Cancel</button>
              </div>
              <div class="col-6">
                <button class="foot-btn">Confirm Payment</button>
              </div>
            </div>
          </div>
        </div>
        <span class="back" @click="modal=!modal">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 10.5L1 6M1 6L5.5 1.5M1 6L17 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data:()=>({
    search: '',
    filter: '',
    modal: false,
    b: 0,
    a: 0,
    c: 0,
    all: [],
    btn: ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
  }),
  methods: {
    filtr(i){
      this.filter = i
      this.$store.getters.getFilter(this.filter)
    },
    del(order){
      this.$store.dispatch('delOrder',order.id)
    },
    searchInp() {
      if(this.search !== ''){
        this.$store.getters.getSearch(this.search)
      }
    },
    add(dish){
      let newOrder = {
        id: dish.id,
        count: 1,
      }
      // newOrder.count = 1
      // newOrder.count = 1
      this.$store.dispatch('orders',newOrder)
    }
    // add(dish){
    //   console.log(this.getOrders);
    //   dish.count = 1
    //   this.getOrders.find(f => {
    //     if(f.id == dish.id) {
    //       f.count++
    //       this.$store.dispatch('updateOrders',f)
    //     }
    //   })
    //       this.$store.dispatch('orders',dish)
    // }
  },
  computed: {
    getWeek(){
      return this.$store.getters.getWeek
    },
    getMonth(){
      return this.$store.getters.getMonth
    },
    subTotal(){
      return this.$store.getters.total
    },
    dishes(){
      return this.$store.getters.dishess
    },
    categoryDishes(){
      return this.$store.getters.categoryDishess
    },
    getOrders(){
      return this.$store.getters.orders
    }
  },
  created() {
    window.addEventListener('keypress', (e) => {
      if (e.key == '/') {
        document.getElementById('search').focus()
        document.querySelector('.slash').style.display = 'none'
      }
    });
    window.addEventListener('click', () => {
        document.querySelector('.slash').style.display = 'flex'
    });
  }
}
</script>