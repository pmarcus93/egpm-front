<template>
    <div class="animate row">
        <BarraTitulo
                titulo="CONFIGURAÇÕES GERAIS"
                texto-botao="Salvar"
                icon="check"
                action="salvar"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Botão Flutuante:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_link">Link:</label>
                                <input v-if="botao.st_link" id="st_link" v-model="botao.st_link" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_icone">Ícone</label>
                                <div class="input-group">
                                    <input id="st_icone" v-model="botao.st_icone" type="text" class="form-control">
                                    <div class="input-group-append">
                                        <span class="input-group-text p-0">
                                            <button class="btn btn-light" type="button">
                                                <i v-if="botao.st_icone" :class="'fa fa-'+botao.st_icone"></i>
                                                <i v-else></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_cor">Cor: (Hexadecimal)</label>
                                <input id="st_cor" v-model="botao.st_cor" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Redes Sociais:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_linkfacebook">Facebook:</label>
                                <input v-if="social[0].st_link" v-model="social[0].st_link" id="st_linkfacebook" class="form-control">
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_linkinstagram">Instagram:</label>
                                <input v-if="social[1].st_link" v-model="social[1].st_link" id="st_linkinstagram" class="form-control">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Localização:</h4>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_nome">Local:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome">Endereço:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                        <div class="col-3">
                            <div class="form-group">
                                <label for="st_nome">CEP:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Dias e Horários:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome">Dia e Horário:</label>
                                <input id="st_nome" class="form-control">
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import BotaoApi from "@/services/BotaoApi";
    import SocialApi from "@/services/SocialApi";


    export default {
        name: "FormGeral",
        components: {BarraTitulo},
        data: function () {
            return {
                botao: {},
                social: [],

            }
        },
        methods: {

            save: function () {
                BotaoApi.post( BotaoApi.pushAutenticationobject(this.botao), result => {

                });

                SocialApi.post( BotaoApi.pushAutenticationobject(this.social), result => {

                });
            }
        },
        created() {
            BotaoApi.getOne(1, result => {
                this.botao = result.data;
            });

            SocialApi.getAll(result => {
                this.social = result.data;
            });

        }

    }
</script>

<style scoped>

    .titulo {
        border-bottom: whitesmoke 2px solid;
    }

    .label-titulo {
        font-size: 1.3em;
    }

    .textarea-sobre {
        height: 331px;
    }

</style>