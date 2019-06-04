<template>
    <div class="animate row">
        <BarraTitulo
                titulo="SEÇÕES"
                texto-botao="Salvar"
                icon="check"
                action="salvar"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Sobre:</h4>
                    </div>

                    <div class="row">

                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome" class="label-titulo">Texto Sobre:</label>
                                <textarea v-model="secoes[0].st_texto" id="st_nome"
                                          class="form-control textarea-sobre"></textarea>
                            </div>
                        </div>

                        <div class="col-6">
                            <label class="label-titulo">Ícones:</label>

                            <div v-for="(icone, indice) in iconessobre" class="row">
                                <div class="form-group">
                                    <label :for="'st_icone'+indice+1">ícone {{indice+1}}</label>
                                    <div class="input-group">
                                        <input :id="'st_icone'+indice+1" v-model="iconessobre[indice].st_icone"
                                               type="text"
                                               class="form-control">
                                        <div class="input-group-append">
                                                 <span class="input-group-text p-0">
                                                    <button class="btn btn-light" type="button">
                                                    <i v-if="iconessobre[0]"
                                                       :class="'fa fa-'+iconessobre[indice].st_icone"></i>
                                                    <i v-else></i>
                                                     </button>
                                                </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Texto:</label>
                                        <input v-model="iconessobre[indice].st_valor" id="st_nome"
                                               class="form-control">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 pt-3">
            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Campeonato:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome" class="label-titulo">Texto Campeonato:</label>
                                <textarea v-model="secoes[1].st_texto" id="st_nome" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 pt-3">
            <div class="row">
                <div class="col-12 py-2">
                    <div class="col-12 titulo mb-3">
                        <h4>Free Play:</h4>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="st_nome" class="label-titulo">Texto Free Play:</label>
                                <textarea v-model="secoes[2].st_texto" id="st_nome" class="form-control"></textarea>
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
    import EgpmApi from "@/services/EgpmApi";


    export default {
        name: "FormSecoes",
        components: {BarraTitulo},
        created() {
            EgpmApi.getIconeSecao(1, result => {
                this.iconessobre = result.data;
            });

            EgpmApi.getAllSecao(result => {
                this.secoes = result.data;
            })
        },
        data: function () {
            return {
                iconessobre: [],
                secoes: []

            }
        },
        methods: {
            save: function () {
                var self = this;
                EgpmApi.salvarsessao(EgpmApi.pushAutenticationobject(self.secoes), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Seções salvas com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }

                    EgpmApi.getAllSecao(result => {
                        this.secoes = result.data;
                    })

                });

                EgpmApi.salvarIconeSobre(EgpmApi.pushAutenticationobject(self.iconessobre), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "ícones salvos com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }

                    EgpmApi.getIconeSecao(1, result => {
                        this.iconessobre = result.data;
                    });

                });
            },
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