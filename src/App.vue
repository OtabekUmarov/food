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
    this.$store.dispatch('getDishes')
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
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-4 {
  width: 33%;
  max-width: 33%;
  flex-basis: 33%;
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
</style>