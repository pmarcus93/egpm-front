<template>
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

                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-success float-right" v-on:click="save"> <i class="fa fa-check"></i> Salvar </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import BotaoApi from "@/services/BotaoApi";

    export default {
        name: "ItemFormBotaoFlutuante",
        data: function () {
            return {
                botao: {},
            }
        },
        methods: {

            save: function () {
                BotaoApi.post( BotaoApi.pushAutenticationobject(this.botao), result => {

                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Informações salvas com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);

                        BotaoApi.getOne(1, result => {
                            this.botao = result.data;
                        });

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }

                });

            }
        },
        created() {
            BotaoApi.getOne(1, result => {
                this.botao = result.data;
            });

        }

    }
</script>

<style scoped>

</style>