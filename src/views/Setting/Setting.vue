<template>
  <div>
    <div class="box">
        <div class="report">
          <div class="report-top">
            <div class="left">Products Management</div>
            <div class="right">
              <button>
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.1976 10.2271C15.927 10.2271 17.3329 11.6148 17.3329 13.3219C17.3329 15.028 15.927 16.4167 14.1976 16.4167C12.4683 16.4167 11.0624 15.028 11.0624 13.3219C11.0624 11.6148 12.4683 10.2271 14.1976 10.2271ZM14.1976 11.6787C13.279 11.6787 12.533 12.4151 12.533 13.3219C12.533 14.2277 13.279 14.9651 14.1976 14.9651C15.1162 14.9651 15.8623 14.2277 15.8623 13.3219C15.8623 12.4151 15.1162 11.6787 14.1976 11.6787ZM7.4308 12.5958C7.83667 12.5958 8.16608 12.921 8.16608 13.3216C8.16608 13.7223 7.83667 14.0474 7.4308 14.0474H1.40247C0.996596 14.0474 0.66719 13.7223 0.66719 13.3216C0.66719 12.921 0.996596 12.5958 1.40247 12.5958H7.4308ZM3.80174 0.583374C5.53112 0.583374 6.93698 1.97207 6.93698 3.67818C6.93698 5.38429 5.53112 6.77298 3.80174 6.77298C2.07334 6.77298 0.666504 5.38429 0.666504 3.67818C0.666504 1.97207 2.07334 0.583374 3.80174 0.583374ZM3.80174 2.03497C2.88411 2.03497 2.13707 2.77238 2.13707 3.67818C2.13707 4.58397 2.88411 5.32138 3.80174 5.32138C4.72035 5.32138 5.46642 4.58397 5.46642 3.67818C5.46642 2.77238 4.72035 2.03497 3.80174 2.03497ZM16.5979 2.95257C17.0038 2.95257 17.3332 3.27773 17.3332 3.67837C17.3332 4.07901 17.0038 4.40417 16.5979 4.40417H10.5686C10.1627 4.40417 9.8333 4.07901 9.8333 3.67837C9.8333 3.27773 10.1627 2.95257 10.5686 2.95257H16.5979Z"
                    fill="white" />
                </svg>
                Filter Order
              </button>
            </div>
          </div>
        </div>
        <div class="btns">
          <button @click="filtr('hot'), b=0" class="filter-btn" :class='{active: b==0}' style="margin-left:24px">Hot
            Dishes</button>
          <button @click="filtr('cold'), b=1" class="filter-btn" :class='{active: b==1}'>Cold Dishes</button>
          <button @click="filtr('soup'), b=2" class="filter-btn" :class='{active: b==2}'>Soup</button>
          <button @click="filtr('grill'), b=3" class="filter-btn" :class='{active: b==3}'>Grill</button>
          <button @click="filtr('appetizer'), b=4" class="filter-btn" :class='{active: b==4}'>Appetizer</button>
          <button @click="filtr('dessert'), b=5" class="filter-btn" :class='{active: b==5}'>Dessert</button>
        </div>
        <div class="dishes">
          <div class="row">
            <div class="col-4 col-md-6 add">
              <div @click="add()">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.5V9M9 16.5V9M9 9H16.5M9 9H1.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                <span>Add new dish</span>
              </div>
            </div>
            <div class="col-4 col-md-6" v-for="dishe of categoryDishes" :key="dishe.id">
              <div class="dish">
                <div class="img">
                  <img :src="require(`../../assets/img/`+dishe.img+`.png`)" alt="">
                </div>
                <div class="title">{{dishe.title}}</div>
                <div class="bottom">
                  <div class="price">$ <span>{{dishe.price}}</span> {{dishe.bowl}} Bowls</div>
                </div>
                <div class="btn-dish">
                  <button @click="add(dishe)"><svg style="transform:translateY(2px); margin-right:5px" width="16"
                      height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.9512 14.0075C15.2543 14.0075 15.5 14.2484 15.5 14.5455C15.5 14.8178 15.2935 15.0429 15.0257 15.0785L14.9512 15.0834H9.22583C8.92274 15.0834 8.67705 14.8426 8.67705 14.5455C8.67705 14.2731 8.8835 14.0481 9.15136 14.0124L9.22583 14.0075H14.9512ZM9.38269 1.6806C10.4217 0.662132 12.1069 0.662132 13.1459 1.6806L14.2245 2.73791C15.2635 3.75638 15.2635 5.40829 14.2245 6.42675L6.11717 14.3739C5.65359 14.8283 5.02506 15.0833 4.36901 15.0833H1.04878C0.740346 15.0833 0.492487 14.8342 0.500174 14.532L0.583693 11.248C0.600298 10.6273 0.859392 10.0355 1.30722 9.59653L9.38269 1.6806ZM8.755 3.81592L2.08332 10.3573C1.83438 10.6013 1.69012 10.9308 1.68089 11.2755L1.61121 14.0071L4.36901 14.0075C4.69352 14.0075 5.00559 13.8955 5.2519 13.6932L5.34108 13.6131L12.0458 7.04092L8.755 3.81592ZM12.3698 2.44136C11.7594 1.84305 10.7691 1.84305 10.1588 2.44136L9.53167 3.05508L12.8217 6.28008L13.4484 5.66599C14.0249 5.10092 14.0569 4.20369 13.5445 3.60171L13.4484 3.49867L12.3698 2.44136Z"
                        fill="#EA7C69" />
                    </svg>
                    Edit dish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="setting-btns">
            <button class="foot-btn">Cancel</button>
            <button class="foot-btn">Confirm Payment</button>
        </div>
      </div>
      <div class="dialog" :class='{show:dialog}'>
      <div class="modal">
        <h2>Add New Dish </h2>
        <input class="input" type="text" v-model="newDish.title" placeholder="Titel....">
        <input class="input" type="text" v-model="newDish.price" placeholder="Price....">
        <input class="input" type="text" v-model="newDish.bowl" placeholder="Bowl....">
        <input class="input" type="text" v-model="newDish.img" placeholder="Image">
        <select class="input" v-model="newDish.category">
          <option value="null">Choose category</option>
          <option value="hot">Hot Dishes</option>
          <option value="cold">Cold Dishes</option>
          <option value="soup">Soup</option>
          <option value="grill">Grill</option>
          <option value="appetizer">Appetizer</option>
          <option value="dessert">Dessert</option>
        </select>
        <div class="tr">
          <button class="send" @click="cancel()">Cancel</button>
          <button class="send" v-show="!toggle" @click="addNew()">Add</button>
          <button class="send" v-show="toggle" @click="save()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventEmitter } from '../../main'
export default {
data: () => ({
      b: 0,
      dialog: false,
      toggle: false,
      newDish: {
        category: null
      }
    }),
    methods: {
      filtr(i) {
        this.filter = i
        this.$store.getters.getFilter(this.filter)
      },
      add(){
        this.dialog = true
        eventEmitter.$emit('dialog')
      },
      edit(d){
        this.dialog = true
        this.newDish = d
        this.toggle = true
        eventEmitter.$emit('dialog')
      },
      addNew(){

        this.dialog = false
        this.$store.dispatch('newsDish', this.newDish)
        eventEmitter.$emit('dialog1')
      },
      save(){
        this.dialog = false
        this.toggle = false
        this.$store.dispatch('saveDish', this.newDish)
        this.newDish= {
          category: null
        }
        eventEmitter.$emit('dialog1')
      },
      cancel(){
        this.dialog = false
        this.newDish= {
          category: null
        }
        eventEmitter.$emit('dialog1')
      }
    },
    computed: {
      categoryDishes() {
        return this.$store.getters.categoryDishess
      }
    }
}
</script>
