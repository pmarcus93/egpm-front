<template>
    <div class="row">
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
                            <label for="st_nome">Nome patrocinador:</label>
                            <input id="st_nome" v-model="patrocinador.st_nome" type="text"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_email">Email Patrocinador:</label>
                            <input id="st_email" v-model="patrocinador.st_email" type="email" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_imagem">Imagem (Logo):</label>
                            <input id="st_imagem" v-model="patrocinador.st_imagem" type="text"
                                   class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_website">Site patrocinador:</label>
                            <input id="st_website" v-model="patrocinador.st_website" type="text" class="form-control"
                            >
                        </div>

                    </div>


                    <div class="col-6">
                        <h4>Detalhes:</h4>
                        <div class="form-group">
                            <label for="st_nome">Tipo:</label>
                            <select id="st_nome" v-model="patrocinador.id_tipo" type="text"
                                    class="form-control">
                                <option value="1">Patrocinador</option>
                                <option selected value="2">Apoiador</option>
                            </select>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import PatrocinadorApi from "@/services/PatrocinadorApi";

    export default {
        name: "FormPatrocinadores",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_patrocinador) {
                PatrocinadorApi.getOne(this.$route.params.id_patrocinador, patrocinador => {
                    this.patrocinador = patrocinador.data;
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
                    st_website: null,
                    id_tipo: 2
                }

            }
        },
        methods: {
            save: function () {
                PatrocinadorApi.postPatrocinador(PatrocinadorApi.pushAutenticationobject(this.patrocinador), result => {
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
