<template>
    <div>
        <ButtonTicket></ButtonTicket>
        <div>
            <Banner></Banner>
            <Sobre></Sobre>
            <Tournament></Tournament>
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
    import Tournament from "./telas/Tournament";
    import FreePlay from "./telas/FreePlay";
    import Duvida from "./telas/Duvida";
    import Localizacao from "./telas/Localizacao";
    import ButtonTicket from "./itens/ButtonTicket";

    export default {
        name: "Home",
        components: {
            ButtonTicket,
            Localizacao,
            Duvida,
            FreePlay,
            Tournament,
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
