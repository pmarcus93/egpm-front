<template>
    <section>
        <HeaderSubScreen
                titulo="Games"
                descricao="Confira trailers, imagens, regras dos campeonatos e detalhes dos games presentes no evento."
                :imagem="imgBanner">
        </HeaderSubScreen>

        <Campeonatos></Campeonatos>

    </section>
</template>

<script>
    import HeaderSubScreen from "../component/SubscreenHeader";
    import Campeonatos from "../component/GameList";
    import ImgBanner from "../../assets/images/games-banner.jpeg";

    export default {
        name: "CampeonatoTela",
        components: {Campeonatos, HeaderSubScreen},
        data() {
            return {
                imgBanner: ImgBanner,
            }
        }
    }
</script>
