<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <Hero />
</template>

<script>
import Hero from '../components/practice-components/Hero.vue';

export default {
  name: 'App',
  components: {
    Hero,
  },
    data(){
      return {}
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
