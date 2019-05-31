<template>
    <div class="animate row">
        <BarraTitulo
                titulo="PATROCINADORES"
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
                            <label for="">Nome patrocinador:</label>
                            <input v-model="patrocinador.st_nome" type="text"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Email Patrocinador:</label>
                            <input v-model="patrocinador.st_email" type="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Imagem (Logo):</label>
                            <input v-model="patrocinador.st_imagem" type="text"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="">Site patrocinador:</label>
                            <input v-model="patrocinador.st_website" type="text" class="form-control"
                            >
                        </div>

                    </div>
                </div>


            </form>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import PatrocinadorApi from "../../services/PatrocinadorApi";

    export default {
        name: "FormPatrocinadores",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_patrocinador) {
                var self = this;
                PatrocinadorApi.getPatrocinador(this.$route.params.id_patrocinador, patrocinador => {
                    self.patrocinador = patrocinador.data;
                })
            }
        },
        data() {
            return {
                patrocinador: {
                    id_patrocinador: null,
                    st_email: null,
                    st_imagem: null,
                    st_nome: null,
                    st_website: null
                }

            }
        },
        methods: {
            save: function () {
                var self = this;
                PatrocinadorApi.postPatrocinador(PatrocinadorApi.pushAutenticationobject(self.patrocinador), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Patrocinador salvo com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'viewpatrocinador',
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