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
    this.$store.dispatch('getOrders')
    this.$store.dispatch('getReport')
    this.$store.dispatch('getMostOrder')
  }
}
</script>


<style>
@import url(./assets/css/style.css);
@import url(./assets/css/media.css);
</style>