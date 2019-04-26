<template>
  <div id="app">
    <Navbar></Navbar>
    <Banner></Banner>
  </div>
</template>

<script>
import Navbar from "./components/itens/Navbar";
import Banner from "./components/telas/Banner";

export default {
  name: 'app',
  components: {
    Banner,
    Navbar
  }
}
</script>

<style>

/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
