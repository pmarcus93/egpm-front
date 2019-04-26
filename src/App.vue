<template>
  <div id="app">
    <Navbar></Navbar>
    <Banner></Banner>
    <Sobre></Sobre>
    <Midia></Midia>
  </div>
</template>

<script>
import Navbar from "./components/itens/Navbar";
import Banner from "./components/telas/Banner";
import Sobre from "./components/telas/Sobre";
import Midia from "./components/telas/Midia";

export default {
  name: 'app',
  components: {
    Midia,
    Sobre,
    Banner,
    Navbar
  }
}
</script>

<style>

</style>
