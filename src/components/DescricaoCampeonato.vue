<template>
    <div class="animate">

        <FundoFixo
                :imagem="campeonato.st_imagem"
        ></FundoFixo>
        <div class="fixed">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
        </div>

        <div v-if="campeonato.id_jogo">
            <div class="container-fluid conteudo">
                <BannerJogo
                        :titulo="campeonato.st_nome"
                        :descricao="campeonato.st_descricao"
                        :lancamento="campeonato.dt_lancamento"
                        :estilo="campeonato.st_estilo"
                        :video="campeonato.st_video"
                ></BannerJogo>

                <div v-if="+campeonato.bl_campeonato" class="row lista-jogo-dados text-center my-auto">
                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-file-alt"></i></div>
                        <div class="col-12 texto">{{campeonato.st_ingresso}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-users"></i></div>
                        <div class="col-12 texto">{{campeonato.nu_vaga}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-gamepad"></i></div>
                        <div class="col-12 texto">{{campeonato.st_plataforma}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-calendar"></i></div>
                        <div class="col-12 texto">{{campeonato.dt_jogo}}</div>
                    </div>

                    <div class="col-md-2 col-sm-12 bloco py-4 mx-auto">
                        <div class="col-12 icone"><i class="fa fa-clock"></i></div>
                        <div class="col-12 texto">{{campeonato.hr_jogo}}</div>
                    </div>
                </div>
            </div>

            <div class="conteudo-regra">
                <div class="container">
                    <div class="row ">
                        <div class="col-12 py-4">
                            <div v-if="campeonato.st_regra">
                                <h3 class="titulo-regras text-center">REGRAS</h3>
                                <p v-html="campeonato.st_regra"></p>
                                <hr>
                            </div>
                            <div v-if="campeonato.st_observacao">
                                <h3 class="titulo-observacoes text-center">OBSERVAÇÕES</h3>
                                <p v-html="campeonato.st_observacao"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="dadoscarregados">
            <div class="container-fluid conteudo">
                <ItemErro
                        erro="ERRO 404"
                        subtitulo="Ops, parece que você entrou em uma página de campeonato inválida."
                        descricao="Selecione um dos campeonatos disponíveis:">
                </ItemErro>
            </div>
            <div class="container py-5">
                <Campeonatos></Campeonatos>
            </div>
        </div>

        <BlocoRodape></BlocoRodape>
    </div>
</template>

<script>

    import Rainbow from "./itens/Rainbow";
    import Navbar from "./itens/Navbar";
    import FundoFixo from "./itens/FundoFixo";
    import BannerJogo from "./itens/BannerJogo";
    import ItemErro from "./itens/ItemErro";
    import Campeonatos from "./telas/Campeonatos";
    import EgpmApi from "@/services/EgpmApi.js";
    import BlocoRodape from "./itens/BlocoRodape";

    export default {
        name: "DescricaoCampeonato",
        components: {
            BlocoRodape,
            Campeonatos,
            ItemErro,
            BannerJogo,
            FundoFixo,
            Navbar,
            Rainbow,
        },
        data() {
            return {
                campeonato: {},
                dadoscarregados: false
            }
        },
        created() {
            EgpmApi.getCampeonato(this.$route.params.jogo, campeonato => {
                this.campeonato = campeonato.data;
                this.dadoscarregados = true;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .lista-jogo-dados {
        background: $bg-light;
    }

    .icone {
        font-size: 2.5em;
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
            top: 0;
            opacity: 1
        }
    }

</style>