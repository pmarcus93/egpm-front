<template>
    <div id="app">
        <ButtonTicket></ButtonTicket>
        <div class="wraper">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
            <Banner></Banner>
            <Sobre></Sobre>
            <Campeonato></Campeonato>
            <Campeonatos></Campeonatos>
            <Palestras></Palestras>
            <FreePlay></FreePlay>
            <Midia></Midia>
            <Duvida></Duvida>
            <Localizacao></Localizacao>
            <Patrocinadores></Patrocinadores>
            <Rodape></Rodape>
        </div>
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
    import Rainbow from "./components/itens/Rainbow";
    import Duvida from "./components/telas/Duvida";
    import Localizacao from "./components/telas/Localizacao";
    import ButtonTicket from "./components/itens/ButtonTicket";
    import Patrocinadores from "./components/telas/Patrocinadores";
    import Rodape from "./components/telas/Rodape";

    export default {
        name: 'app',
        components: {
            Rodape,
            Patrocinadores,
            ButtonTicket,
            Localizacao,
            Duvida,
            Rainbow,
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
        src: url("/assets/fonts/Archive-Regular.ttf");
    }

    /*Necessário para funcionamento do Parallax*/
    .wraper {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
    }

</style>
