<template>
    <div>
        <div>
            <Banner
                    :button="btnticket"
            ></Banner>
            <Sobre></Sobre>
            <Tournament></Tournament>
            <Campeonatos></Campeonatos>
            <Talks></Talks>
            <FreePlay></FreePlay>
            <Midia></Midia>
            <FAQ></FAQ>
            <Locale></Locale>
            <ButtonTicket
                    :button="btnticket"
                    :is-fixed="true">
            </ButtonTicket>
        </div>
    </div>
</template>

<script>

    import Banner from "../component/Banner";
    import Sobre from "../component/Sobre";
    import Midia from "../component/Midia";
    import Campeonatos from "../component/GameList";
    import Talks from "../component/Quizzes";
    import Tournament from "../component/Tournament";
    import FreePlay from "../component/FreePlay";
    import FAQ from "../component/FAQ";
    import Locale from "../component/Locale";
    import ButtonTicket from "../component/ButtonTicket";

    export default {
        name: "Home",
        props: ["button"],
        data() {
            return {
                btnticket: {
                    st_link: "",
                    bl_ativo: 0
                }
            }
        },
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
        },
    }
</script>

<style>

</style>
