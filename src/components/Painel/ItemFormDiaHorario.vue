<template>
    <div class="row">
        <div class="col-12 py-2">
            <div class="col-12 titulo mb-3">
                <h4>Dias e Horários:</h4>
            </div>
            <div class="row">
                <div class="col-6">
                    <div v-for="(item, indice) in diahorarios" class="my-2">
                        <div class="row">
                            <div class="form-group col-10">
                                <div>
                                    <input v-model="diahorarios[indice].st_diahorario" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="form-group col-2">
                                <div>
                                    <button v-on:click="removediahorario(indice)" class="form-control btn btn-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button v-on:click="save" class="ml-1 btn btn-success float-right">
                            <i class="fa fa-check"></i> Salvar
                        </button>
                        <button v-on:click="novodiahorario" class="btn btn-primary float-right"><i
                                class="fa fa-plus"></i> Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DiaHorarioApi from "@/services/DiaHorarioApi";

    export default {
        name: "ItemFormDiaHorario",
        methods: {
            novodiahorario: function () {
                this.diahorarios.push({});
            },

            removediahorario: function (indice) {
                if (this.diahorarios[indice].id_diahorario) {
                    this.diahorariosremover.push(this.diahorarios[indice].id_diahorario);
                }
                this.diahorarios.splice(indice, 1);
            },

            save: function () {
                var data = {
                    insert: this.diahorarios,
                    delete: this.diahorariosremover
                };

                DiaHorarioApi.post(data, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Informações salvas com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.diahorariosremover = [];
                        DiaHorarioApi.getAll(result => {
                            this.diahorarios = result.data;
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
                diahorarios: [
                    {
                        st_diahorario: "",
                        id_diahorario: "",
                    }
                ],
                diahorariosremover: []
            }
        },
        created() {
            DiaHorarioApi.getAll(result => {
                this.diahorarios = result.data;
            });
        }
    }
</script>

<style scoped>
    .titulo {
        border-bottom: whitesmoke 2px solid;
    }
</style>