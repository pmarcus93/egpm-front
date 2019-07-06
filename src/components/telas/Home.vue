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
            <FAQ></FAQ>
            <Locale></Locale>
        </div>
    </div>
</template>

<script>

    import Banner from "../content/Banner";
    import Sobre from "../content/Sobre";
    import Midia from "../content/Midia";
    import Campeonatos from "../itens/GameList";
    import Talks from "../content/Talks";
    import Tournament from "../content/Tournament";
    import FreePlay from "../content/FreePlay";
    import FAQ from "../content/FAQ";
    import Locale from "../content/Locale";
    import ButtonTicket from "../itens/ButtonTicket";

    export default {
        name: "Home",
        components: {
            ButtonTicket,
            Locale,
            FAQ,
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

<style>

</style>
