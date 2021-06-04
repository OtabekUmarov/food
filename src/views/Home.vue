<template>
  <div class="home">
    <div class="head">
      <div class="left">
        <div class="title">
          Jaegar Resto
        </div>
        <div class="data">
          Tuesday, 2 Feb 2021
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
      </div>
    </div>
    <div class="dishes">
      <div class="row">
        <div class="col-4" v-for="dishe of dishes" :key="dishe.id">
          <div class="dish">
            <div class="info">
            </div>
              <div class="img">
                <img :src="`/assets/img/`+dishe.img+`.png`" alt="">
                <!-- <img src="../assets/img/img1.png" alt=""> -->
              </div>
              <div class="title">{{dishe.title}}</div>
              <div class="bottom">
                <div class="narx">$ {{dishe.narx}}</div>
                <div class="bowl">{{dishe.bowl}}</div>
              </div>
              <!-- <div class="btn-dish"></div> -->
          </div>
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
    searchInp() {
      this.$store.getters.getSearch(this.search)
    }
  },
  computed: {
    getSearch(){
      return this.$store.getters.search
    },
    dishes(){
      return this.$store.getters.dishess
    }
  }
}
</script>

<style scoped>
.row {
  margin-left: -12px;
  margin-right: -12px;
}
.col-4 {
  padding: 12px;
}
.home {
  width: calc(100% - 515px);
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
.home .menu .titles {
  font-size: 20px;
  font-family: 'b-b',serif;
}
.dish {
  position: relative;
  text-align: center;
  width: 100%;
  padding: 24px;
  padding-top: 0;
  z-index: 1;
  font-size: 14px;
}
.dish .info {
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
.dish .bottom .bowl {
  color: #ABBBC2;
  margin-top: 5px;
}
</style>