<template>
  <app-header/>
  <advert-carousel/>
  <multi-grid-advert/>
</template>

<script>
import AdvertCarousel from './components/HomePage/advertCarousel.vue';
import AppHeader from './components/Shared/appHeader.vue';
import MultiGridAdvert from './components/HomePage/multiGridAdvert.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AdvertCarousel,
    MultiGridAdvert
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
