<template>
    <div id="app">
        <Navbar></Navbar>
        <Banner></Banner>
        <Sobre></Sobre>
        <Campeonato></Campeonato>
        <Campeonatos></Campeonatos>
        <Palestras></Palestras>
        <FreePlay></FreePlay>
        <Midia></Midia>
    </div>
</template>

<script>
    import Navbar from "./components/itens/Navbar";
    import Banner from "./components/telas/Banner";
    import Sobre from "./components/telas/Sobre";
    import Midia from "./components/telas/Midia";
    import Campeonatos from "./components/telas/Campeonatos";
    import Palestras from "./components/telas/Palestras";
    import Campeonato from "./components/telas/Campeonato";
    import FreePlay from "./components/telas/FreePlay";

    export default {
        name: 'app',
        components: {
            FreePlay,
            Campeonato,
            Palestras,
            Campeonatos,
            Midia,
            Sobre,
            Banner,
            Navbar
        }
    }
</script>

<style>

    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

    @font-face {
        font-family: "Archive";
        src: url("/assets/fonts/Archive-Regular.otf");
    }

</style>
