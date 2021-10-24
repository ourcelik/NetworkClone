<template>
  <app-header />
  <advert-carousel/>
  <multi-grid-advert/>
  <app-cart />
  <app-footer/>
  
</template>

<script>
import AdvertCarousel from './components/HomePage/advertCarousel.vue';
import AppHeader from './components/Shared/appHeader.vue';
import MultiGridAdvert from './components/HomePage/multiGridAdvert.vue';
import AppFooter from './components/Shared/appFooter.vue';
import AppCart from './components/Shared/appCart.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AdvertCarousel,
    MultiGridAdvert,
    AppFooter,
    AppCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
