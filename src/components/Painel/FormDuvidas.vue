<template>
    <div class="row">
        <BarraTitulo
                titulo="DÚVIDAS"
                icon="check"
                texto-botao="Salvar"
                action="save"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados básicos:</h4>

                        <div class="form-group">
                            <label for="st_duvida">Dúvida:</label>
                            <textarea id="st_duvida" v-model="duvida.st_duvida" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="st_resposta">Resposta:</label>
                            <textarea id="st_resposta" v-model="duvida.st_resposta" class="form-control"></textarea>
                        </div>


                        <div class="form-group">
                            <label for="nu_ordem">Ordem:</label>
                            <input id="nu_ordem" v-model="duvida.nu_order" type="number" min="0"
                                   class="form-control">
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

    import DuvidaApi from "@/services/DuvidaApi";
    import BarraTitulo from "./BarraTitulo";

    export default {
        name: "FormDuvidas",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_duvida) {
                DuvidaApi.getDuvida(this.$route.params.id_duvida, resposta => {
                    this.duvida = resposta.data;
                })
            }
        },
        data: function () {
            return {
                duvidas: [],
                duvida: {
                    id_duvida: null,
                    nu_order: null,
                    st_duvida: null,
                    st_resposta: null
                }
            }
        },
        methods: {
            save: function () {
                DuvidaApi.postDuvida(this.duvida, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Dúvida salva com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'viewduvidas',
                        })

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
