<template>
    <div>
        <ButtonTicket></ButtonTicket>
        <div>
            <Banner></Banner>
            <Sobre></Sobre>
            <Tournament></Tournament>
            <Campeonatos></Campeonatos>
            <Talks></Talks>
            <FreePlay></FreePlay>
            <Midia></Midia>
            <Duvida></Duvida>
            <Locale></Locale>
        </div>
    </div>
</template>

<script>

    import Banner from "./telas/Banner";
    import Sobre from "./telas/Sobre";
    import Midia from "./telas/Midia";
    import Campeonatos from "./telas/GameList";
    import Talks from "./telas/Talks";
    import Tournament from "./telas/Tournament";
    import FreePlay from "./telas/FreePlay";
    import Duvida from "./telas/Duvida";
    import Locale from "./telas/Locale";
    import ButtonTicket from "./itens/ButtonTicket";

    export default {
        name: "Home",
        components: {
            ButtonTicket,
            Locale,
            Duvida,
            FreePlay,
            Tournament,
            Talks,
            Campeonatos,
            Midia,
            Sobre,
            Banner,
        }
    }
</script>

<style scoped>
</style>
