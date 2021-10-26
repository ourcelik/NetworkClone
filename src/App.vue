<template>
  <app-header />
  <register/>
  <app-footer/>
</template>

<script>
import AppHeader from './components/Shared/appHeader.vue';
import AppFooter from './components/Shared/appFooter.vue';
import Register from './pages/Register.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Register
   
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
