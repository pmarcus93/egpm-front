<template>
    <div>
        <ButtonTicket></ButtonTicket>
        <Toasty></Toasty>
        <Navbar></Navbar>
        <div class="wraper animate site-contents">
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

    import Navbar from "./itens/Navbar";
    import Banner from "./telas/Banner";
    import Sobre from "./telas/Sobre";
    import Midia from "./telas/Midia";
    import Campeonatos from "./telas/Campeonatos";
    import Palestras from "./telas/Palestras";
    import Campeonato from "./telas/Campeonato";
    import FreePlay from "./telas/FreePlay";
    import Duvida from "./telas/Duvida";
    import Localizacao from "./telas/Localizacao";
    import ButtonTicket from "./itens/ButtonTicket";
    import Patrocinadores from "./telas/Patrocinadores";
    import Rodape from "./telas/Rodape";
    import Toasty from "./itens/Toasty";

    export default {
        name: "Home",
        components: {
            Toasty,
            Rodape,
            Patrocinadores,
            ButtonTicket,
            Localizacao,
            Duvida,
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

<style scoped>
    .site-contents {
        margin-top: 62px
    }
</style>