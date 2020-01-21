<template>
    <section>
        <HeaderSubScreen
                titulo="Games"
                descricao="Confira trailers, imagens, regras dos campeonatos e detalhes dos games presentes no evento."
                imagens="https://egpmdeveloper.lucasjunior.com.br/upload/Imagens/20190630152915.jpeg">
        </HeaderSubScreen>
        <Campeonatos></Campeonatos>
    </section>
</template>

<script>
    import HeaderSubScreen from "../itens/HeaderSubScreen";
    import Campeonatos from "../itens/GameList";

    export default {
        name: "CampeonatoTela",
        components: {Campeonatos, HeaderSubScreen},
    }
</script>

<style scoped>
</style>
