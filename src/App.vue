<template>
  <div class="app">
    <Sidebar/>
    <div class="views">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './views/Sidebar'
export default {
  components: {
    Sidebar
  },
  created() {
    this.$store.dispatch('getDishes'),
    this.$store.dispatch('getOrders')
    this.$store.dispatch('getReport')
    this.$store.dispatch('getMostOrder')
  }
}
</script>


<style>
:root {
  --primary: #EA7C69;
  --dark: #1F1D2B;
  --bg: #2D303E;
}
@font-face {
  font-family: 'b-r';
  src: url('./assets/fonts/Barlow-Regular.ttf');
}
@font-face {
  font-family: 'b-m';
  src: url('./assets/fonts/Barlow-Medium.ttf');
}
@font-face {
  font-family: 'b-b';
  src: url('./assets/fonts/Barlow-SemiBold.ttf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
.foot-btn {
  width: 100%;
  background-color: unset;
  padding: 14px 0;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-family: 'b-b',serif;
  transition: 0.3s;
  font-size: 14px;
  border-radius: 8px;
}
.foot-btn:hover {
  color: #fff;
  background-color: var(--primary);
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
}
.col-4 {
  width: 33.33%;
  max-width: 33.33%;
  flex-basis: 33.33%;
  padding: 12px;
}
.col-9 {
  width: 75%;
  max-width: 75%;
  flex-basis: 75%;
  padding: 12px;
}
.col-4 {
  width: 33.33%;
  max-width: 33.33%;
  flex-basis: 33.33%;
  padding: 12px;
}
.col-3 {
  width: 25%;
  max-width: 25%;
  flex-basis: 25%;
  padding: 12px;
}
.col-10 {
  width: 83.33%;
  max-width: 83.33%;
  flex-basis: 83.33%;
}
.col-2 {
  width: 16.66%;
  max-width: 16.66%;
  flex-basis: 16.66%;
}
.col-6 {
  width: 50%;
  max-width: 50%;
  flex-basis: 50%;
  padding: 12px;
}
.app {
  font-family: 'b-r', sans-serif;
  min-height: 100vh;
  background-color: var(--bg);
  color: #fff;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background-color: aqua;
}
.views {
  margin-left: 105px;
  padding: 25px;
}
 .report {
  padding: 24px;
  background-color: var(--dark);
  border-radius: 8px;
}
.report-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.report-top .left {
  font-size: 20px;
  font-family: 'b-m',serif;
}
.report-top .right button {
  padding: 14px;
  background-color: unset;
  border: 1px solid #393C49;
  border-radius: 8px;
  color: #fff;
  transition: 0.3s;
  display: flex;
  align-items: start;
}
.report-top .right button svg {
  margin-right: 10px;
}
.report-top .right button:hover {
  background-color: var(--primary);
}
</style>