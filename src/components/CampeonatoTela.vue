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
                                    :titulo="item.titulo"
                                    :imagem="item.imagem"
                                    :rota="item.rota"
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
        data: function () {
            return {
                campeonatos: [
                    {
                        titulo: "Mortal Kombat 11",
                        imagem: "https://www.trueachievements.com/customimages/093902.jpg",
                        rota: "mortalkombat"
                    },
                    {
                        titulo: "The King Of Fighters",
                        imagem: "https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                    },
                    {
                        titulo: "FIFA",
                        imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg",
                        rota: "fifa"
                    },
                    {
                        titulo: "Mortal Kombat 11",
                        imagem: "https://www.trueachievements.com/customimages/093902.jpg"
                    },
                    {
                        titulo: "The King Of Fighters",
                        imagem: "https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                    },
                    {
                        titulo: "FIFA",
                        imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
                    },

                    {
                        titulo: "Mortal Kombat 11",
                        imagem: "https://www.trueachievements.com/customimages/093902.jpg"
                    },
                    {
                        titulo: "The King Of Fighters",
                        imagem: "https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                    },
                    {
                        titulo: "FIFA",
                        imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
                    },

                    {
                        titulo: "Mortal Kombat 11",
                        imagem: "https://www.trueachievements.com/customimages/093902.jpg"
                    },
                    {
                        titulo: "The King Of Fighters",
                        imagem: "https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                    },
                    {
                        titulo: "FIFA",
                        imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
                    },

                    {
                        titulo: "Mortal Kombat 11",
                        imagem: "https://www.trueachievements.com/customimages/093902.jpg"
                    },
                    {
                        titulo: "The King Of Fighters",
                        imagem: "https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"
                    },
                    {
                        titulo: "FIFA",
                        imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"
                    },

                ]
            }
        }
    }
</script>

<style scoped>

</style>