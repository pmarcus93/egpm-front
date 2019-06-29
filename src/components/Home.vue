<template>
    <div>
        <ButtonTicket></ButtonTicket>
        <div class="site-contents">
            <Banner></Banner>
            <Sobre></Sobre>
            <Campeonato></Campeonato>
            <Campeonatos></Campeonatos>
            <Palestras></Palestras>
            <FreePlay></FreePlay>
            <Midia></Midia>
            <Duvida></Duvida>
            <Localizacao></Localizacao>
        </div>
    </div>
</template>

<script>

    import Banner from "./telas/Banner";
    import Sobre from "./telas/Sobre";
    import Midia from "./telas/Midia";
    import Campeonatos from "./telas/GameList";
    import Palestras from "./telas/Palestras";
    import Campeonato from "./telas/Campeonato";
    import FreePlay from "./telas/FreePlay";
    import Duvida from "./telas/Duvida";
    import Localizacao from "./telas/Localizacao";
    import ButtonTicket from "./itens/ButtonTicket";
    import Toasty from "./itens/Toasty";

    export default {
        name: "Home",
        components: {
            Toasty,
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
        }
    }
</script>

<style scoped>
</style>
