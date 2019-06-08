<template>
    <div class="pagina-duvidas">
        <FundoFixo></FundoFixo>
        <div class="fixed">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
        </div>
        <div class="animate">
            <div class="container conteudo">
                <BannerMenor
                        titulo="CAMPEONATOS"
                        descricao="Selecione um game para conferir detalhes.
                    Confira as regras do campeonato, quantidade de jogadores, plataforma, categoria, trailer e muito mais!"
                ></BannerMenor>
            </div>

            <div class="container pb-5">
                <div class="row">
                    <ItemCampeonato v-for="(item) in campeonatos"
                                    :titulo="item.st_nome"
                                    :imagem="item.st_imagem"
                                    :rota="item.id_jogo"
                                    :iscampeonato="item.bl_campeonato"
                    ></ItemCampeonato>
                </div>
            </div>
            <BlocoRodape></BlocoRodape>
        </div>
    </div>

</template>

<script>
    import BannerMenor from "./itens/BannerMenor";
    import Rainbow from "./itens/Rainbow";
    import Navbar from "./itens/Navbar";
    import FundoFixo from "./itens/FundoFixo";
    import ItemCampeonato from "./itens/ItemCampeonato";
    import JogoApi from "@/services/JogoApi.js";
    import BlocoRodape from "./itens/BlocoRodape";

    export default {
        name: "CampeonatoTela",
        components: {BlocoRodape, ItemCampeonato, FundoFixo, Navbar, Rainbow, BannerMenor},
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