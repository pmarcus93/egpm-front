<template>

    <div class="row">
        <div class="col-12 py-2">
            <div class="col-12 titulo mb-3">
                <h4>Localização:</h4>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="form-group">
                        <label for="st_local">Local:</label>
                        <input v-model="localizacao.st_local" id="st_local" class="form-control">
                    </div>
                </div>

                <div class="col-6">
                    <div class="form-group">
                        <label for="st_endereco">Endereço:</label>
                        <input v-model="localizacao.st_endereco" id="st_endereco" class="form-control">
                    </div>
                </div>

                <div class="col-3">
                    <div class="form-group">
                        <label for="st_cep">CEP:</label>
                        <input v-model="localizacao.st_cep" id="st_cep" class="form-control">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <button class="btn btn-success float-right" v-on:click="save"><i class="fa fa-check"></i> Salvar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import LocalizacaoApi from "@/services/LocalizacaoApi";

    export default {
        name: "ItemFormLocalizacao",
        created() {
            LocalizacaoApi.getOne(1, result => {
                this.localizacao = result.data;
            })
        },
        methods: {
            save: function () {
                LocalizacaoApi.post(LocalizacaoApi.pushAutenticationobject(this.localizacao), result => {

                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Informações salvas com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);

                        LocalizacaoApi.getOne(1, result => {
                            this.social = result.data;
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
        data() {
            return {
                localizacao: {
                    id_localizacao: "",
                    st_local: "",
                    st_cep: "",
                    st_endereco: "",
                }
            }
        }
    }
</script>

<style scoped>
    .titulo {
        border-bottom: whitesmoke 2px solid;
    }
</style>