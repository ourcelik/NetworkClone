<template>
    <app-header/>
    <advert-carousel/>
    <itemCarousel/>
    <multi-grid-advert/>
    <app-cart/>
    <app-footer/>
</template>

<script>
import AppHeader from './components/Shared/appHeader.vue';
import AdvertCarousel from './components/HomePage/advertCarousel.vue';
import AppCart from './components/Shared/appCart.vue';
import AppFooter from './components/Shared/appFooter.vue';
import MultiGridAdvert from './components/HomePage/multiGridAdvert.vue';
import ItemCarousel from './components/Shared/appItems/itemCarousel.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppCart,
    AdvertCarousel,
    AppFooter,
    MultiGridAdvert,
    ItemCarousel
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
