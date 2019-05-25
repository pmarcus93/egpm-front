<template>
    <div class="pagina-duvidas">
        <FundoFixo></FundoFixo>
        <div class="fixed">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
        </div>
        <div class="animate">
            <div class="container-fluid conteudo">
                <BannerMenor
                        titulo="CAMPEONATOS"
                        descricao="Selecione um game para conferir detalhes.
                    Confira as regras do campeonato, quantidade de jogadores, plataforma, categoria, trailer e muito mais!"
                ></BannerMenor>
            </div>

            <div class="container pb-5">
                <div class="row">

                    <ItemCampeonato v-for="(item, indice) in campeonatos"
                                    :titulo="item.st_nome"
                                    :imagem="item.st_imagem"
                                    :rota="item.id_jogo"
                    ></ItemCampeonato>
                </div>
            </div>
            <Patrocinadores></Patrocinadores>
            <div class="container-fluid">
                <Rodape></Rodape>
            </div>
        </div>
    </div>

</template>

<script>
    import Rodape from "./telas/Rodape";
    import Patrocinadores from "./telas/Patrocinadores";
    import BannerMenor from "./itens/BannerMenor";
    import Rainbow from "./itens/Rainbow";
    import Navbar from "./itens/Navbar";
    import FundoFixo from "./itens/FundoFixo";
    import ItemCampeonato from "./itens/ItemCampeonato";
    import EgpmApi from "@/services/EgpmApi.js";

    export default {
        name: "CampeonatoTela",
        components: {ItemCampeonato, FundoFixo, Navbar, Rainbow, BannerMenor, Patrocinadores, Rodape},
        created() {
            var self = this;
            EgpmApi.getAllCampeonatos(campeonatos => {
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