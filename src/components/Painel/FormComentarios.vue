<template>
    <div class="row">
        <BarraTitulo
                titulo="COMENTÁRIOS"
                icon="check"
                texto-botao="Salvar"
                action="save"
                :loadingbutton="loadingbutton"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados do Comentário:</h4>

                        <div class="form-group">
                            <label for="st_autor">Nome do autor:</label>
                            <input id="st_autor" v-model="comentario.st_autor" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_comentario">Comentário:</label>
                            <textarea id="st_comentario" v-model="comentario.st_comentario"
                                      class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            <label>Imagem:</label>
                            <div class="custom-file">
                                <input v-on:change="handleFileUpload()" type="file" ref="file"
                                       class="custom-file-input" id="st_arquivo" required>
                                <label class="custom-file-label" for="st_arquivo">{{labelimputfile}}</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="st_imagem">Imagem (url):</label>
                            <div class="input-group">
                                <input id="st_imagem"
                                       required
                                       type="text"
                                       class="form-control"
                                >
                                <div class="input-group-append">
                                    <span v-on:click.prevent="removeimagem"
                                          class="btn btn-danger">
                                                <i class="fa fa-trash"></i>
                                        </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

    import ComentarioApi from "@/services/ComentarioApi";
    import PNotify from "@/services/PNotifyService";
    import BarraTitulo from "./BarraTitulo";

    export default {
        name: "FormComentarios",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_comentario) {
                ComentarioApi.getComentario(this.$route.params.id_comentario, resposta => {
                    this.comentario = resposta.data;
                })
            }
        },
        data: function () {
            return {
                file: '',
                labelimputfile: "Escolher Arquivo...",
                comentario: {
                    id_comentario: null,
                    st_imagem: null,
                    st_autor: null,
                    st_comentario: null,
                    imagens: []
                },
                uploadimagem: 0,
                loadingbutton: false
            }
        },
        methods: {
            removeimagem: function () {
                this.campeonato.imagens = [];
                this.uploadimagem = 1;
            },

            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                this.labelimputfile = this.$refs.file.files[0].name;
                this.uploadimagem = 1;
            },
            save: function () {
                this.loadingbutton = true;

                let formData = new FormData();
                formData.append("st_comentario", this.comentario.st_comentario);
                formData.append("st_autor", this.comentario.st_autor);
                formData.append("st_file", this.file);
                formData.append("uploadimagem", this.uploadimagem);

                ComentarioApi.postComentario(formData, result => {
                    if (result.data.status) {
                        PNotify.success("Comentário salvo com sucesso.");
                        this.$router.push({
                            name: 'viewcomentarios',
                        })

                    } else {
                        PNotify.fail(result.data.erro.message);
                        this.loadingbutton =false;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
