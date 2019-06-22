<template>
    <div class="row">

        <div class="modal fade" id="modalimg" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Imagem</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img loading="lazy" v-if="comentario.imagens.default"
                             :src="comentario.imagens.default.st_url"
                             :alt="'Imagem do autor '+comentario.st_nome"
                             width="100%">
                    </div>
                </div>
            </div>
        </div>

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

                        <div v-if="comentario.imagens.default === undefined " class="form-group">
                            <label>Imagem:</label>
                            <div class="custom-file">
                                <input v-on:change="handleFileUpload()" type="file" ref="file"
                                       class="custom-file-input" id="st_url" required>
                                <label class="custom-file-label" for="st_url">{{labelimputfile}}</label>
                            </div>
                        </div>

                        <div v-else class="form-group">
                            <label for="st_imagem">Imagem (url):</label>
                            <div class="input-group">
                                <input id="st_imagem"
                                       required
                                       type="text"
                                       class="form-control"
                                       :value="comentario.imagens.default.st_url"
                                >
                                <div class="input-group-append">
                                    <span v-on:click.prevent="abremodal"
                                          class=" btn btn-success">
                                                <i class="fa fa-eye"></i>
                                        </span>
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
                    id_comentario: "",
                    st_imagem: "",
                    st_autor: "",
                    st_comentario: "",
                    imagens: []
                },
                uploadimagem: 0,
                loadingbutton: false
            }
        },
        methods: {
            removeimagem: function () {
                this.comentario.imagens = [];
                this.uploadimagem = 1;
            },

            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                this.labelimputfile = this.$refs.file.files[0].name;
                this.uploadimagem = 1;
            },

            abremodal: function () {
                $('#modalimg').modal('show');
            },

            save: function () {
                this.loadingbutton = true;

                let formData = new FormData();
                formData.append("id_comentario", this.comentario.id_comentario);
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

    #st_comentario {
        height: 300px;
    }

</style>
