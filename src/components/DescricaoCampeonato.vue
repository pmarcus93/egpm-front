<template>
    <div class="animate">

        <div class="fixed">
            <Navbar></Navbar>
            <Rainbow></Rainbow>
        </div>

        <div v-if="campeonato.id_jogo">
            <div class="container-fluid conteudo p-0">
                <BannerJogo
                        :titulo="campeonato.st_nome"
                        :descricao="campeonato.st_descricao"
                        :lancamento="campeonato.dt_lancamento"
                        :estilo="campeonato.st_estilo"
                        :video="campeonato.st_video"
                        :imagem="campeonato.st_imagem"
                        :plataforma="campeonato.st_plataforma"
                        :classificacaoindicativa="campeonato.st_classificacaoindicativa"
                        :quantidadejogadores="campeonato.nu_quantidadejogadores"
                ></BannerJogo>
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


        <div v-if="campeonato" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 my-4">
                        <div class="row mt-3">
                            <div class="col-md-8">
                                <h2>Campeonato</h2>

                                <h4>Regras</h4>
                                <p class="text-justify"><span>Os competidores lutarão em esquema de chaves, no estilo melhor de três. Quem vencer três lutas completas primeiro avança.
                                Não há restrições de personagens. Fatalities não são permitidos. Mercies e Brutalities são permitidos. Os jogadores podem
                             trazer seus próprios controles, seja DualShock 4 padrão ou controle arcade.</span></p>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-group detalhes-campeonato">
                                    <li class="list-group-item list-group-item-primary">Detalhes</li>
                                    <li v-if="campeonato.st_plataformacampeonato" class="list-group-item"><i
                                            class="fas fa-gamepad"></i> {{campeonato.st_plataformacampeonato}}
                                    </li>
                                    <li v-if="campeonato.nu_vaga" class="list-group-item"><i
                                            class="fas fa-user-friends"></i> {{campeonato.nu_vaga}} Vagas
                                    </li>
                                    <li v-for="item in campeonato.datahorario" class="list-group-item">
                                        <i class="fas fa-calendar-alt"></i> {{item.st_diasemana}}, {{item.st_hora}}
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
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

    h1, h2, h3, h4, h5 {
        font-family: $font-archive;
    }

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

    .detalhes-campeonato {
        i {
            margin-right: 10px;
        }
    }

    .list-group-item-primary {
        font-family: $font-archive;
        background-color: $color-primary;
        color: $color-secondary-variant;
    }

    .titulo-regras {
        font-family: $font-archive;
        font-size: 3em;
    }

    .titulo-observacoes {
        font-family: $font-archive;
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
