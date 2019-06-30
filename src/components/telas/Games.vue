<template>
    <section>
        <HeaderSubScreen
                titulo="Games"
                descricao="Confira trailers, imagens, regras dos campeonatos e detalhes dos games presentes no evento."
                imagens="http://egpmdeveloper.lucasjunior.com.br/upload/Imagens/20190630152915.jpeg">
        </HeaderSubScreen>
        <Campeonatos></Campeonatos>
    </section>
</template>

<script>
    import JogoApi from "@/services/JogoApi.js";
    import HeaderSubScreen from "../itens/HeaderSubScreen";
    import Campeonatos from "./GameList";

    export default {
        name: "CampeonatoTela",
        components: {Campeonatos, HeaderSubScreen},
        created() {
            var self = this;
            JogoApi.getCampeonatos(campeonatos => {
                self.campeonatos = campeonatos.data;
            })
        },
        data: function () {
            return {
                campeonatos: []
            }
        }
    }
</script>

<style scoped>
</style>
