<template>
    <div>

        <div v-if="!campeonato.id_jogo && dadoscarregados">
            <Erro404Campeonato
            ></Erro404Campeonato>
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

        <div v-if="campeonato.bl_campeonato == 1" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 my-4">
                        <div class="row mt-3">
                            <div class="col-md-8">
                                <h2>Campeonato</h2>

                                <h4>Regras</h4>
                                <p class="text-justify"><span v-html="campeonato.st_regra"></span></p>
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

    import BannerJogo from "./itens/BannerJogo";
    import ItemErro from "./itens/ItemErro";
    import Campeonatos from "./telas/Campeonatos";
    import JogoApi from "@/services/JogoApi";
    import BlocoRodape from "./itens/BlocoRodape";
    import Erro404 from "./Erro404";
    import Erro404Campeonato from "./Erro404Campeonato";

    export default {
        name: "DescricaoCampeonato",
        components: {
            Erro404Campeonato,
            Erro404,
            BlocoRodape,
            Campeonatos,
            ItemErro,
            BannerJogo
        },
        data() {
            return {
                campeonato: {},
                dadoscarregados: false
            }
        },
        created() {
            JogoApi.getOne(this.$route.params.jogo, campeonato => {
                this.campeonato = campeonato.data;
                this.dadoscarregados = true;
            })
        }
    }
</script>

<style lang="scss" scoped>

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

    .animate {
        animation: animacao 0.6s;
        display: block;
        position: relative;
    }

    .conteudo-regra {
        background: white;
    }

    .detalhes-campeonato {
        i {
            margin-right: 10px;
        }
    }

    .icone {
        font-size: 2.5em;
    }


    .lista-jogo-dados {
        background: $bg-light;
    }

    .list-group-item-primary {
        background-color: $color-primary;
        color: $color-secondary-variant;
        font-family: $font-archive;
    }

    .texto {
        font-size: 1.5em;
        font-weight: 600;
    }

    .titulo-regras {
        font-family: $font-archive;
        font-size: 3em;
    }

    .titulo-observacoes {
        font-family: $font-archive;
        font-size: 2.5em;
    }

</style>
