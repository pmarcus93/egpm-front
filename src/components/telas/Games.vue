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
    const HeaderSubScreen = () => import( "../itens/HeaderSubScreen");
    const Campeonatos = () => import( "../itens/GameList");
    const ImgBanner = () => import( "../../assets/images/games-banner.jpeg");

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

<style scoped>
</style>
