<template>
    <div class="pagina-duvidas animate">
        <FundoFixo></FundoFixo>
        <Navbar></Navbar>
        <div class="container-fluid">
            <Rainbow></Rainbow>
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

                <!--<ItemCampeonato titulo="Mortal Kombat 11"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://www.trueachievements.com/customimages/093902.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="FIFA"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="Street Fighter v"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://www.grabpcgames.com/wp-content/uploads/2018/05/street-fighter-5-pc-version-download-now-780x405.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="FortNite"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://media.playstation.com/is/image/SCEA/fortnite-season-8-key-art-01-ps4-us-27feb19?$native_nt$"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="Counter Strike"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="http://poageekweek.com.br/wp-content/uploads/2019/02/counter-strike-global-offensive-uhd-4k-wallpaper-3840x1920.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="League of Legends"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/08/12040711/6623d71f-7154-4cad-bcc5-4d9719ab5f6c.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="PUBG"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://storage.googleapis.com/kaggle-media/competitions/PUBG/PUBG%20Inlay.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="Just Dance 2020"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="http://www.gamersegames.com.br/newwpress/wp-content/uploads/2018/12/Just-Dance-Capa.jpg"-->
                <!--&gt;</ItemCampeonato>-->

                <!--<ItemCampeonato titulo="The King Of Fighters"-->
                <!--texto="Texto de exemplo talvez não necessário"-->
                <!--imagem="https://i.ytimg.com/vi/3nfdHDhT6UQ/maxresdefault.jpg"-->
                <!--&gt;</ItemCampeonato>-->


            </div>
        </div>

        <Patrocinadores></Patrocinadores>

        <div class="container-fluid">
            <Rodape></Rodape>
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