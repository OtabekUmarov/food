<template>
  <div>
    <div class="container dashboard">
      <div class="head">
          <div class="left">
            <div class="title">
              Dashboard
            </div>
            <div class="data">
              {{getWeek}}, {{ new Date().getDate() }}  {{getMonth}} {{ new Date().getFullYear() }}
            </div>
          </div>
      </div>
      <div class="counter">
        <div class="row">
          <div class="col-4">
            <div class="box">
              <div class="top">
                <span class="top-svg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#9288E0" stroke-width="1.8"/>
                    <path d="M10.459 9.94112C10.459 9.34702 10.916 8.97489 11.5362 8.90307V10.9988C11.471 10.9857 11.4122 10.9661 11.3534 10.9465C10.7593 10.7507 10.459 10.4112 10.459 9.94112ZM13.7233 14.015C13.7233 14.6548 13.2337 15.0792 12.5417 15.1379V12.8855C12.5874 12.8986 12.6331 12.9116 12.6722 12.9182C13.4034 13.1206 13.7233 13.4796 13.7233 14.015ZM12.5547 17.3772L12.5482 16.5481C14.337 16.3783 15.473 15.3925 15.473 13.8387C15.473 12.2588 14.4088 11.5929 13.0966 11.3121L12.5417 11.1946V8.91613C13.2337 9.02712 13.6189 9.54941 13.6385 10.0717H15.3098C15.2837 8.71374 14.2195 7.68222 12.5678 7.50595V6.65723H11.5101V7.49942C9.9302 7.64305 8.68976 8.51136 8.68976 10.0782C8.68976 11.5602 9.76046 12.3175 10.9748 12.5852L11.5362 12.7093V15.1379C10.7006 15.0269 10.2632 14.5242 10.2305 13.9236H8.52002C8.53308 15.1314 9.34263 16.4045 11.5036 16.5611L11.4971 17.3772H12.5547Z" fill="#9288E0"/>
                  </svg>
                </span>
                <div class="foiz green">+32.40%</div>
                <span class="arrow">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99994 11.25C4.75473 11.25 4.55208 11.0704 4.52 10.8375L4.51558 10.7727L4.51583 2.38275L1.45258 5.4139C1.26384 5.60069 0.957161 5.60134 0.767603 5.41535C0.595277 5.24628 0.579064 4.98116 0.719347 4.79402L0.766128 4.74039L4.65645 0.89039L4.66665 0.880955C4.67711 0.871179 4.68801 0.861857 4.69932 0.853024L4.65645 0.89039C4.67519 0.871841 4.6951 0.855129 4.71594 0.840253C4.72903 0.83126 4.74262 0.822533 4.75666 0.814481C4.7879 0.796293 4.82059 0.782199 4.85421 0.771802C4.86606 0.768299 4.87816 0.765043 4.89044 0.762247C4.89982 0.759973 4.90934 0.758102 4.91891 0.756517C4.92928 0.754931 4.93965 0.753548 4.95012 0.752494C4.96063 0.751299 4.97138 0.750566 4.98213 0.750184C4.98809 0.750105 4.994 0.75 4.99994 0.75L5.01602 0.750143C5.02795 0.750537 5.03986 0.751364 5.05174 0.752622L4.99994 0.75C5.02759 0.75 5.05471 0.752285 5.0811 0.756673C5.09313 0.758634 5.1052 0.761117 5.11719 0.764057C5.12671 0.766415 5.13606 0.769008 5.14529 0.771866C5.15626 0.775239 5.16731 0.779094 5.17823 0.783356C5.18951 0.787781 5.20053 0.792567 5.21133 0.797737C5.2196 0.801655 5.22812 0.806039 5.23653 0.810691C5.25231 0.819464 5.26712 0.828751 5.28135 0.838778C5.28358 0.840356 5.28604 0.842124 5.28848 0.843918C5.3101 0.859836 5.32917 0.876334 5.34683 0.894192L9.23384 4.74036C9.4226 4.92713 9.42197 5.22933 9.23243 5.41533C9.06011 5.58442 8.791 5.59927 8.60168 5.46025L8.54745 5.41393L5.48475 2.38333L5.48429 10.7727C5.48429 11.0363 5.26744 11.25 4.99994 11.25Z" fill="#50D1AA"/>
                  </svg>
                </span>
              </div>
              <div class="sum">$10,243.00</div>
              <div class="total">Total Revenue</div>
            </div>
          </div>
           <div class="col-4">
             <div class="box">
              <div class="top">
                <span class="top-svg">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9857 0C14.0482 0 16 1.43503 16 4.25765V18.3309C16 18.7736 15.8285 19.1982 15.5232 19.5112C15.2179 19.8242 14.8038 20 14.3608 20C14.0965 19.9957 13.8368 19.9291 13.5863 19.7971L7.974 16.6635L2.38442 19.8037C1.7112 20.1624 0.895445 19.9969 0.384308 19.3975L0.286275 19.2719L0.192626 19.1174C0.0704155 18.8782 0.00448265 18.613 0 18.3309V4.43434C0 1.49929 1.90915 0 5.01434 0H10.9857ZM10.9857 1.44775H5.01434C2.61925 1.44775 1.41205 2.39579 1.41205 4.43434L1.41195 18.3189C1.41267 18.3631 1.42346 18.4065 1.41172 18.3897L1.44919 18.4519C1.51373 18.5421 1.63485 18.5715 1.71962 18.5265L7.30683 15.3883C7.72327 15.1576 8.22503 15.1576 8.64351 15.3894L14.2463 18.5173C14.2887 18.5397 14.3355 18.5517 14.372 18.5523C14.4293 18.5523 14.4842 18.529 14.5247 18.4875C14.5652 18.446 14.5879 18.3897 14.5879 18.3309V4.25765C14.5879 2.35788 13.35 1.44775 10.9857 1.44775ZM11.4079 6.31663C11.7978 6.31663 12.1139 6.64072 12.1139 7.0405C12.1139 7.40697 11.8483 7.70984 11.5037 7.75777L11.4079 7.76438H4.54042C4.1505 7.76438 3.8344 7.44029 3.8344 7.0405C3.8344 6.67404 4.10001 6.37117 4.44462 6.32324L4.54042 6.31663H11.4079Z" fill="#FFB572"/>
                  </svg>
                </span>
                <div class="foiz red">-12.40%</div>
                <span class="arrow" style="transform:rotate(180deg); background:rgba(255, 100, 113, 0.24);">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99994 11.25C4.75473 11.25 4.55208 11.0704 4.52 10.8375L4.51558 10.7727L4.51583 2.38275L1.45258 5.4139C1.26384 5.60069 0.957161 5.60134 0.767603 5.41535C0.595277 5.24628 0.579064 4.98116 0.719347 4.79402L0.766128 4.74039L4.65645 0.89039L4.66665 0.880955C4.67711 0.871179 4.68801 0.861857 4.69932 0.853024L4.65645 0.89039C4.67519 0.871841 4.6951 0.855129 4.71594 0.840253C4.72903 0.83126 4.74262 0.822533 4.75666 0.814481C4.7879 0.796293 4.82059 0.782199 4.85421 0.771802C4.86606 0.768299 4.87816 0.765043 4.89044 0.762247C4.89982 0.759973 4.90934 0.758102 4.91891 0.756517C4.92928 0.754931 4.93965 0.753548 4.95012 0.752494C4.96063 0.751299 4.97138 0.750566 4.98213 0.750184C4.98809 0.750105 4.994 0.75 4.99994 0.75L5.01602 0.750143C5.02795 0.750537 5.03986 0.751364 5.05174 0.752622L4.99994 0.75C5.02759 0.75 5.05471 0.752285 5.0811 0.756673C5.09313 0.758634 5.1052 0.761117 5.11719 0.764057C5.12671 0.766415 5.13606 0.769008 5.14529 0.771866C5.15626 0.775239 5.16731 0.779094 5.17823 0.783356C5.18951 0.787781 5.20053 0.792567 5.21133 0.797737C5.2196 0.801655 5.22812 0.806039 5.23653 0.810691C5.25231 0.819464 5.26712 0.828751 5.28135 0.838778C5.28358 0.840356 5.28604 0.842124 5.28848 0.843918C5.3101 0.859836 5.32917 0.876334 5.34683 0.894192L9.23384 4.74036C9.4226 4.92713 9.42197 5.22933 9.23243 5.41533C9.06011 5.58442 8.791 5.59927 8.60168 5.46025L8.54745 5.41393L5.48475 2.38333L5.48429 10.7727C5.48429 11.0363 5.26744 11.25 4.99994 11.25Z" fill="#FF7CA3"/>
                  </svg>
                </span>
              </div>
              <div class="sum">23,456</div>
              <div class="total">Total Dish Ordered</div>
            </div>
          </div>
          <div class="col-4">
             <div class="box">
              <div class="top">
                <span class="top-svg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.59149 14.4563L9.91127 14.4576C14.5557 14.4981 17.1835 15.4361 17.1835 17.9983C17.1835 20.5061 14.665 21.4736 10.2236 21.5546L9.59149 21.5603C4.74715 21.5603 2.00049 20.6394 2.00049 18.0183C2.00049 15.3937 4.75808 14.4563 9.59149 14.4563ZM9.59149 15.9563C5.57414 15.9563 3.50049 16.6612 3.50049 18.0183C3.50049 19.3667 5.56916 20.0603 9.59149 20.0603C13.6091 20.0603 15.6835 19.3552 15.6835 17.9983C15.6835 16.6505 13.6129 15.9563 9.59149 15.9563ZM17.5872 13.7481C18.1677 13.7876 18.7449 13.8708 19.2996 13.9938C20.4877 14.2301 21.371 14.6713 21.7757 15.5204C22.0745 16.1491 22.0745 16.8806 21.7757 17.5092C21.3733 18.3563 20.4992 18.7942 19.3044 19.04C18.8987 19.1234 18.5021 18.8622 18.4187 18.4565C18.3352 18.0507 18.5965 17.6542 19.0022 17.5707C19.771 17.4126 20.2827 17.1562 20.4209 16.8654C20.5261 16.6441 20.5261 16.3856 20.4213 16.165C20.2822 15.8732 19.7678 15.6163 18.9912 15.4616C18.4938 15.3515 17.991 15.279 17.4854 15.2446C17.0721 15.2165 16.7599 14.8587 16.788 14.4455C16.8161 14.0322 17.1739 13.72 17.5872 13.7481ZM9.59149 2.49976C12.4395 2.49976 14.7265 4.78636 14.7265 7.63376C14.7265 10.482 12.4397 12.7688 9.59149 12.7688C6.74341 12.7688 4.45749 10.4821 4.45749 7.63376C4.45749 4.78622 6.74359 2.49976 9.59149 2.49976ZM16.0202 3.56936C18.2551 3.56936 20.0672 5.38183 20.0672 7.61636C20.0672 9.85157 18.2554 11.6634 16.0202 11.6634C15.606 11.6634 15.2702 11.3276 15.2702 10.9134C15.2702 10.4991 15.606 10.1634 16.0202 10.1634C17.427 10.1634 18.5672 9.02314 18.5672 7.61636C18.5672 6.21019 17.4266 5.06936 16.0202 5.06936C15.606 5.06936 15.2702 4.73357 15.2702 4.31936C15.2702 3.90514 15.606 3.56936 16.0202 3.56936ZM9.59149 3.99976C7.57207 3.99976 5.95749 5.6146 5.95749 7.63376C5.95749 9.65379 7.57195 11.2688 9.59149 11.2688C11.6113 11.2688 13.2265 9.65354 13.2265 7.63376C13.2265 5.61484 11.6111 3.99976 9.59149 3.99976Z" fill="#65B0F6"/>
                  </svg>
                </span>
                <div class="foiz green">+2.40%</div>
                <span class="arrow">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.99994 11.25C4.75473 11.25 4.55208 11.0704 4.52 10.8375L4.51558 10.7727L4.51583 2.38275L1.45258 5.4139C1.26384 5.60069 0.957161 5.60134 0.767603 5.41535C0.595277 5.24628 0.579064 4.98116 0.719347 4.79402L0.766128 4.74039L4.65645 0.89039L4.66665 0.880955C4.67711 0.871179 4.68801 0.861857 4.69932 0.853024L4.65645 0.89039C4.67519 0.871841 4.6951 0.855129 4.71594 0.840253C4.72903 0.83126 4.74262 0.822533 4.75666 0.814481C4.7879 0.796293 4.82059 0.782199 4.85421 0.771802C4.86606 0.768299 4.87816 0.765043 4.89044 0.762247C4.89982 0.759973 4.90934 0.758102 4.91891 0.756517C4.92928 0.754931 4.93965 0.753548 4.95012 0.752494C4.96063 0.751299 4.97138 0.750566 4.98213 0.750184C4.98809 0.750105 4.994 0.75 4.99994 0.75L5.01602 0.750143C5.02795 0.750537 5.03986 0.751364 5.05174 0.752622L4.99994 0.75C5.02759 0.75 5.05471 0.752285 5.0811 0.756673C5.09313 0.758634 5.1052 0.761117 5.11719 0.764057C5.12671 0.766415 5.13606 0.769008 5.14529 0.771866C5.15626 0.775239 5.16731 0.779094 5.17823 0.783356C5.18951 0.787781 5.20053 0.792567 5.21133 0.797737C5.2196 0.801655 5.22812 0.806039 5.23653 0.810691C5.25231 0.819464 5.26712 0.828751 5.28135 0.838778C5.28358 0.840356 5.28604 0.842124 5.28848 0.843918C5.3101 0.859836 5.32917 0.876334 5.34683 0.894192L9.23384 4.74036C9.4226 4.92713 9.42197 5.22933 9.23243 5.41533C9.06011 5.58442 8.791 5.59927 8.60168 5.46025L8.54745 5.41393L5.48475 2.38333L5.48429 10.7727C5.48429 11.0363 5.26744 11.25 4.99994 11.25Z" fill="#50D1AA"/>
                  </svg>
                </span>
              </div>
              <div class="sum">1,234</div>
              <div class="total">Total Customer</div>
            </div>
          </div>
         
        </div>
      </div>
      <div class="report">
        <div class="report-top">
          <div class="left">Order Report</div>
          <div class="right">
            <button>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1976 10.2271C15.927 10.2271 17.3329 11.6148 17.3329 13.3219C17.3329 15.028 15.927 16.4167 14.1976 16.4167C12.4683 16.4167 11.0624 15.028 11.0624 13.3219C11.0624 11.6148 12.4683 10.2271 14.1976 10.2271ZM14.1976 11.6787C13.279 11.6787 12.533 12.4151 12.533 13.3219C12.533 14.2277 13.279 14.9651 14.1976 14.9651C15.1162 14.9651 15.8623 14.2277 15.8623 13.3219C15.8623 12.4151 15.1162 11.6787 14.1976 11.6787ZM7.4308 12.5958C7.83667 12.5958 8.16608 12.921 8.16608 13.3216C8.16608 13.7223 7.83667 14.0474 7.4308 14.0474H1.40247C0.996596 14.0474 0.66719 13.7223 0.66719 13.3216C0.66719 12.921 0.996596 12.5958 1.40247 12.5958H7.4308ZM3.80174 0.583374C5.53112 0.583374 6.93698 1.97207 6.93698 3.67818C6.93698 5.38429 5.53112 6.77298 3.80174 6.77298C2.07334 6.77298 0.666504 5.38429 0.666504 3.67818C0.666504 1.97207 2.07334 0.583374 3.80174 0.583374ZM3.80174 2.03497C2.88411 2.03497 2.13707 2.77238 2.13707 3.67818C2.13707 4.58397 2.88411 5.32138 3.80174 5.32138C4.72035 5.32138 5.46642 4.58397 5.46642 3.67818C5.46642 2.77238 4.72035 2.03497 3.80174 2.03497ZM16.5979 2.95257C17.0038 2.95257 17.3332 3.27773 17.3332 3.67837C17.3332 4.07901 17.0038 4.40417 16.5979 4.40417H10.5686C10.1627 4.40417 9.8333 4.07901 9.8333 3.67837C9.8333 3.27773 10.1627 2.95257 10.5686 2.95257H16.5979Z" fill="white"/>
              </svg>
              Filter Order
            </button>
          </div>
        </div>
        <div class="table">
          <div class="thead">
            <div class="item">Customer</div>
            <div class="item">Menu</div>
            <div class="item">Total Payment</div>
            <div class="item" style="text-align:left">Status</div>
          </div>
          <div class="tbody" v-for="rep of report" :key="rep.id">
            <div class="item">
              <span class="avatar" :class="rep.status">
                <img :src="require(`../assets/img/${rep.img}.png`)" alt="">
              </span>
              {{rep.name}}</div>
            <div class="item"><div  style="max-width:160px">{{rep.menu}}</div></div>
            <div class="item">$ {{rep.total}}</div>
            <div class="item" :class="rep.status">{{rep.status}}</div>
          </div>
        </div>
      </div>
      <div class="most-ordered">
        <div class="ordered-top">
          <div class="head">
            <div class="name">Most Ordered</div>
            <select class="select">
              <option value="Today" selected>Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last week">Last week</option>
              <option value="Last month">Last month</option>
            </select>
          </div>
          <div class="dish-count">
            <div class="item" v-for="most of mostOrder" :key="most.id">
              <div class="img">
                <img :src="require(`../assets/img/${most.img}.png`)" alt="">
              </div>
              <div class="info">
                <div class="titl">{{most.title}}</div>
                <div class="count">{{most.count}} dishes ordered</div>
              </div>
            </div>
            <div class="view">
              <button>View All</button>
            </div>
          </div>
        </div>
        <div class="ordered-bottom">
          <div class="head">
            <div class="name">Most Type of Order</div>
            <select class="select">
              <option value="Today" selected>Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last week">Last week</option>
              <option value="Last month">Last month</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    report(){
      return this.$store.getters.report
    },
    mostOrder(){
      return this.$store.getters.mostOrder
    },
    getWeek(){
      return this.$store.getters.getWeek
    },
    getMonth(){
      return this.$store.getters.getMonth
    }
  }
}
</script>

<style scoped>
.head {
  padding-bottom: 24px;
  margin-bottom: 12px;
  border-bottom: 1px solid #393C49;
}
.most-ordered {
  position: fixed;
  display: inline-block;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: var(--bg);
  padding: 24px;
  padding-top: 18px;
  padding-left: 0;
}
.most-ordered .ordered-top {
  padding: 12px 24px;
  background-color: var(--dark);
  border-radius: 8px;
  height: 55vh;
  margin-bottom: 24px;
}
.most-ordered .ordered-bottom {
  padding: 12px 24px;
  background-color: var(--dark);
  border-radius: 8px;
  height: 38vh;
}
.most-ordered .head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.most-ordered .dish-count .item{
  display: flex;
  color: #E0E6E9;
  margin-top: 10px;
}
.most-ordered .dish-count .img {
  width: 56px;
  height: 56px;
  margin-right: 16px;
}
.most-ordered .dish-count .img img {
  width: 100%;
}
.most-ordered .dish-count .item .titl {
  font-size: 14px;
  margin-bottom: 4px;
}
.most-ordered .dish-count .item .count {
  font-size: 12px;
}
.most-ordered .dish-count {
  position: relative;
}
.most-ordered .view {
  margin-top: 30px;
  position: absolute; 
  bottom: -50px;
  width: 100%;
}
.most-ordered .view button {
  width: 100%;
  padding: 12px 0;
  border: 1px solid #EA7C69;
  border-radius: 8px;
  color: #EA7C69;
  font-size: 14px;
  background-color: var(--dark);
  transition: 0.3s;
}
.most-ordered .view button:hover {
  background-color: var(--primary);
  color: #fff;
}
.select {
  background-color: var(--dark);
  color: #fff;
  border: 1px solid #393C49;
  border-radius: 8px;
  outline: none;
  padding: 14px;
  transition: 0.3s;
}
.select:hover {
  background-color: var(--primary);
}
.title{
  font-size: 28px;
  font-family: 'b-b',serif;  
}
.head .sana {
  font-size: 16px;
  color: #E0E6E9;
}
.box {
  padding: 16px;
  background-color: var(--dark);
  border-radius: 8px;
}
.top {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.top .top-svg {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg);
  margin-right: 12px;
}
.arrow {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(136, 224, 145, 0.24);
  border-radius: 50%;
}
.foiz {
  margin-right: 6px;
}
.green {
  color: #50D1AA;
}
.red {
  color: #FF7CA3;
}
.sum {
  font-size: 28px;
  font-family: 'b-b',serif;
  margin-bottom: 8px;
}
.total {
  font-size: 14px;
  color: #ABBBC2;
}

.table {
  width: 100%;
  margin-top: 12px;
}
.table .thead, .table .tbody{
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
}
.table .thead {
  border-bottom: 1px solid #393C49;
  font-family: 'b-b',serif;
  padding-bottom: 20px;
}
.table .tbody {
  color: #E0E6E9;
  padding-top: 12px;
}
.table .item {
  padding: 8px 0;
  width: 25%;
  flex-basis: 25%;
}
.table .item:first-child{
  display: flex;
  align-items: center;
}
.avatar {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFB572;
  border-radius: 50%;
  margin-right: 16px;
}
.table .item:nth-child(2){
  width: 35%;
  flex-basis: 35%;
}
.table .item:last-child{
  width: 15%;
  flex-basis: 15%;
  text-transform: capitalize;
  text-align: center;
  padding: 4px 10px;
  border-radius: 30px;
}
.table .item.completed, .avatar.completed {
  background: rgba(107, 226, 190, 0.2);
  color: #50D1AA;
}
.table .item.pending, .avatar.pending {
  background:rgba(255, 181, 114, 0.2);
  color: #FFB572;
}
.table .item.preparing, .avatar.preparing {
  background: rgba(146, 144, 254, 0.2);
  color: #9290FE;
}
.table .item.completed {
  text-transform: capitalize;
  text-align: center;
  padding: 4px 10px;
  background: rgba(107, 226, 190, 0.24);
  border-radius: 30px;;
}
</style>