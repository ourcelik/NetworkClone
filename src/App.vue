<template>
  <app-footer/>
</template>

<script>
import AppFooter from './components/Shared/appFooter.vue';

export default {
  name: 'App',
  components: {
    AppFooter
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
