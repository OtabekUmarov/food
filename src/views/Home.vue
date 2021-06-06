<template>
  <div class="home-wrap">
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
            <input type="text" @input="searchInp()" v-model="search" placeholder="Search for food, coffe, etc..">
          </div>
        </div>
        <div class="btns">
          <button class="btn active">Hot Dishes</button>
          <button class="btn">Cold Dishes</button>
          <button class="btn">Soup</button>
          <button class="btn">Grill</button>
          <button class="btn">Appetizer</button>
          <button class="btn">Dessert</button>
        </div>
        <div class="menu">
          <div class="menu-head">
            <div class="titles">
              Choose Dishes
            </div>
            <div class="select">
              <select>
                <option value="" selected>Dine In</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>
        <div class="dishes">
          <div class="row">
            <div class="col-4" v-for="dishe of dishes" :key="dishe.id">
              <div class="dish">
                  <div class="img">
                    <img :src="require(`../assets/img/`+dishe.img+`.png`)" alt="">
                    <!-- <img src="../assets/img/img1.png" alt=""> -->
                  </div>
                  <div class="title">{{dishe.title}}</div>
                  <div class="bottom">
                    <div class="narx">$ {{dishe.narx}}</div>
                    <div class="bowl">{{dishe.bowl}}</div>
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
            <button class="active">Dine In</button>
            <button>To Go</button>
            <button>Delivery</button>
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
          <div class="row" v-for="order of getOrders" :key="order.id" style="margin-bottom:24px;">
            <div class="col-10 jcsb" style="margin-bottom:10px;">
              <div class="order-name">
                <div class="img">
                  <img :src="require(`../assets/img/${order.img}.png`)" alt="">
                </div>
                <div class="title">
                  <span class="text">{{order.title}}</span>
                  <span class="narx">$ {{order.narx}}</span>
                </div>
              </div>
              <div class="order-count">2</div>
            </div>
            <div class="col-2">
              <div class="order-sum">${{order.narx}}</div>
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
          <button>Continue to Payment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data:()=>({
    search: ''
  }),
  methods: {
    del(order){
      this.$store.dispatch('delOrder',order.id)
    },
    searchInp() {
      this.$store.getters.getSearch(this.search)
    },
    add(dish){
      this.$store.dispatch('orders',dish)
    }
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
    getSearch(){
      return this.$store.getters.search
    },
    dishes(){
      return this.$store.getters.dishess
    },
    getOrders(){
      return this.$store.getters.orders
    }
  },
  created() {
    window.addEventListener('keypress', (e) => {
      if (e.key == 'f') {
        this.showModal = !this.showModal;
      }
      console.log(e.key);
    });
  }
}
</script>
<style>
.container {
  width: calc(100% - 350px);
}
</style>
<style scoped>
.row {
  margin-left: -12px;
  margin-right: -12px;
}
.col-4 {
  padding: 12px;
}
.home-wrap {
  width: calc(100%-105px);
}

.orders {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  padding: 24px;
  background-color: var(--dark);
  height: 100vh;
}
.home .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home .head .title{
  font-size: 28px;
  font-family: 'b-b',serif;
}
.home .head .sana {
  font-size: 16px;
  color: #E0E6E9;
}
.home .head input {
  outline: unset;
  background-color: #393C49;
  color: #ABBBC2;
  padding: 14px 14px 14px 42px;
  border: unset;
  border-radius: 8px;
}
.home .head .right {
  position: relative;
}
.home .head .right svg{
  position: absolute;
  top: 13px;
  left: 12px;
}
.btns {
  display: flex;
  align-items: center;
  padding: 13px 0;
  margin-top: 25px;
  border-bottom: 1px solid #393C49;
}
.btns .btn {
  background-color: unset;
  border: 0;
  margin-right: 32px;
  color: #fff;
}
.btns .btn.active {
  position: relative;
  color: var(--primary);
}
.btns .btn.active:after {
  content: "";
  position: absolute;
  bottom: -13px;
  left: 0;
  width: 60%;
  height: 2px;
  background-color: var(--primary);
}
.home .menu {
  margin: 25px 0;
}
.menu-head {
  display: flex;
  justify-content: space-between;
}
.menu-head select {
  background-color: var(--dark);
  color: #fff;
  border: 1px solid #393C49;
  border-radius: 8px;
  outline: none;
  padding: 14px;
  transition: 0.3s;
}
.menu-head select:hover {
  background-color: var(--primary);
}
.home .menu .titles {
  font-size: 20px;
  font-family: 'b-b',serif;
}
.dish {
  position: relative;
  text-align: center;
  width: 100%;
  /* padding: 24px; */
  padding-top: 0;
  z-index: 1;
  font-size: 14px;
}
.dish:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 85%;
  z-index: -1;
  background-color: var(--dark);
  border-radius: 16px;
  transition: 0.3s;
}
.dish .img {
  width: 130px;
  height: 130px;
  margin: auto;
  margin-bottom: 16px;
}
.dish .img img {
  width: 100%;
}
.dish .title {
  max-width: 144px;
  margin: auto;
  font-family: 'b-m',serif;
  line-height: 18px;
  margin-bottom: 8px;
}

.dish .bottom  {
  margin: auto;
}

.btn-dish button{
  padding: 16px 0;
  width: 100%;
  background: #EA7C6942;
  color: var(--primary);
  border: unset;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  opacity: 0;
  transition: 0.3s;
}
.dish .bottom .bowl {
  color: #ABBBC2;
  margin-top: 5px;
}
.dish:hover:after {
  height: 100%;
  transform: scaleY(1.13) scaleX(1.04);
}
.dish:hover .btn-dish button {
  height: auto;
  transform: scaleY(1.13) scaleX(1.04) translateY(13px);
  opacity: 1;
}
.orders .top {
  font-family: 'b-b',serif;
  font-size: 20px;
  line-height: 28px;
}
.orders-btns {
  margin: 24px 0;
}
.orders-btns button{
  background-color: unset;
  color: #EA7C69;
  padding: 7px 12px;
  margin-right: 8px;
  border: 1px solid #393C49;
  border-radius: 8px;
  transition: 0.3s;
  font-family: 'b-m',serif;
}
.orders-btns button.active, .orders-btns button:hover {
  background-color: var(--primary);
  color: #fff;
}
.orders-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.orders-item button {
  background-color: unset;
  border: 0;
  font-family: 'b-b', serif;
  color: #fff;
}
.jcsb {
  display: flex;
  justify-content: space-between;
}
.order-name .img {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.order-name .title {
  display: flex;
  flex-direction: column;
}
.order-name .title .text{
  display: inline-block;
  width: 120px;
  height: 18px;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  position: relative;
}
.order-name .title .text:after {
  content: "...";
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.order-name .title .narx {
  color: #ABBBC2;
  font-size: 12px;
}
.order {
  margin-top: 24px;
  padding-top: 24px;
  max-height: 45vh;
  overflow: auto;
  border-top: 1px solid #393C49;
}
.order .row, .orders .row{
  margin: 0;
  padding-right: 15px;

}

.order-name {
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-count {
  padding: 14px 14px 12px;
  background-color: var(--bg);
  border: 1px solid #393C49;
  border-radius: 8px;
}
.order-name .img img {
  width: 100%;
}
.order .row .col-2 {
    display: flex;
    align-items: center;
    padding: 0 10px;
}
.order-sum {
  font-size: 16px;
  transform: translateY(-4px);
}
.order-note {
  outline: none;
  background-color: var(--bg);
  width: 100%;
  padding: 14px;
  border: 1px solid #393C49;
  border-radius: 8px;
  color: #E0E6E9;
}
.order-delete {
  background-color: unset;
  border: 1px solid #EA7C69;
  border-radius: 8px;
  height: 100%;
  padding: 0 14px;
  transition: 0.3s;
}
.order-delete:hover {
  background-color: #EA7C69;
}
.order-delete:hover svg path {
  fill: #fff;
}
.discount, .total {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 24px;
}
.discount .left, .total .left {
  font-size: 14px;
  color: #ABBBC2;
}
.payment  button {
  margin-top: 20px;
  width: 100%;
  padding: 14px 0;
  border: 1px solid #EA7C69;
  filter: drop-shadow(0px 8px 24px rgba(146, 136, 224, 0.3));
  border-radius: 8px;
  background-color: unset;
  transition: 0.3s;
  color: #EA7C69;
  font-size: 16px;
  font-family: 'b-b',serif;
}
.payment button:hover {
  background-color: #EA7C69;
  color: #FAFAFA;
}
</style>