<template>
    <div class="pagina-duvidas animate">
        <!--Verifica se o jogo existe-->
        <div v-if="campeonatos[$route.params.jogo]">
            <FundoFixo
                    :imagem="campeonatos[$route.params.jogo].imagem"
            ></FundoFixo>
            <div class="fixed">
                    <Navbar></Navbar>
                    <Rainbow></Rainbow>
            </div>
            <div class="container-fluid conteudo">
                <BannerJogo
                        :titulo="campeonatos[$route.params.jogo].titulo"
                        :video="campeonatos[$route.params.jogo].video"
                        :descricao="campeonatos[$route.params.jogo].descricao"
                        :lancamento="campeonatos[$route.params.jogo].lancamento"
                        :estilo="campeonatos[$route.params.jogo].estilo"
                ></BannerJogo>

                <div class="row lista-jogo-dados text-center my-auto">
                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-file-alt"></i></div>
                        <div class="col-12 texto">{{campeonatos[$route.params.jogo].inscricao}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-users"></i></div>
                        <div class="col-12 texto">{{campeonatos[$route.params.jogo].vagas}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-gamepad"></i></div>
                        <div class="col-12 texto">{{campeonatos[$route.params.jogo].console}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-calendar"></i></div>
                        <div class="col-12 texto">{{campeonatos[$route.params.jogo].data}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                        <div class="col-12 texto">{{campeonatos[$route.params.jogo].horario}}</div>
                    </div>
                </div>
            </div>

            <div class="conteudo-regra">
                <div class="container">
                    <div class="row ">
                        <div class="col-12 py-4">
                            <h3 class="titulo-regras text-center">REGRAS</h3>
                            <p>{{campeonatos[$route.params.jogo].regras}}</p>
                            <hr>
                            <h3 class="titulo-observacoes text-center">OBSERVAÇÕES</h3>
                            <p>{{campeonatos[$route.params.jogo].observacoes}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <FundoFixo></FundoFixo>
            <div class="fixed">
                <Navbar></Navbar>
                <Rainbow></Rainbow>
            </div>
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="ERRO 404"
                        subtitulo="Ops, parece que você entrou unma página de campeonato inválida."
                        descricao="Selecione um dos campeonatos disponíveis:"></ItemErro>
            </div>
            <div class="container py-5">
                <Campeonatos></Campeonatos>
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
    import BannerJogo from "./itens/BannerJogo";
    import ItemErro from "./itens/ItemErro";
    import Campeonatos from "./telas/Campeonatos";

    export default {
        name: "DescricaoCampeonato",
        components: {
            Campeonatos,
            ItemErro,
            BannerJogo, ItemCampeonato, FundoFixo, Navbar, Rainbow, BannerMenor, Patrocinadores, Rodape
        },
        data: function () {
            return {
                campeonatos:
                    {
                        mortalkombat: {
                            titulo: "Mortal Kombat 11",
                            imagem: "https://www.trueachievements.com/customimages/093902.jpg",
                            video: "https://www.youtube.com/embed/7zwQPJmg-Kg?start=3",
                            descricao: "Mortal Kombat 11 is a fighting video game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment.",
                            lancamento: "14/07/2019",
                            estilo: "Luta",
                            console: "PLAYSTATION 4",
                            data: "14/02/2020",
                            horario: "14H",
                            inscricao: "NO LOCAL DO EVENTO",
                            vagas: "100 VAGAS",
                            regras: "Regras",
                            observacoes: "Observações"
                        },
                        fifa: {
                            titulo: "FIFA",
                            imagem: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_EASportsFifa19_image1600w.jpg",
                            video: "https://www.youtube.com/embed/zX0AV6yxyrQ"
                        }
                    },

            }
        }
    }
</script>

<style scoped>
    .lista-jogo-dados {
        background: whitesmoke;
    }

    .bloco {
        transition: all linear .2s;
    }

    .bloco:hover {
        background: #e7e7e7;
        transform: scale(1.06);
    }

    .icone {
        font-size: 4em;
    }

    .texto {
        font-size: 1.5em;
        font-weight: 600;
    }

    .conteudo-regra {
        background: white;
    }

    .titulo-regras {
        font-family: Archive;
        font-size: 3em;
    }

    .titulo-observacoes {
        font-family: Archive;
        font-size: 2.5em;
    }

    .animate {
        display: block;
        position: relative;
        animation: animacao 0.6s;
    }

    @keyframes animacao {
        from {
            top: -100px;
            opacity: 0
        }
        to {
            top: 0px;
            opacity: 1
        }
    }

</style>