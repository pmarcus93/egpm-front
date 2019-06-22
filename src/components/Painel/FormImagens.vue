<template>
    <div>
        <div class="row">
            <BarraTitulo
                    titulo="IMAGEM"
                    icon="check"
                    texto-botao="Salvar"
                    action="save"
                    :loadingbutton="loadingbutton"
            ></BarraTitulo>

            <div class="col-12 pt-3">
                <form>
                    <div class="row">
                        <div class="col-12">
                            <h4>Upload de Imagens:</h4>

                            <div class="col-6">
                                <div class="form-group">
                                    <label for="st_nome">Nome da imagem:</label>
                                    <input v-model="imagem.st_nome" id="st_nome" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="form-group">
                                    <label for="st_alt">Descrição (Alt):</label>
                                    <input v-model="imagem.st_alt" id="st_alt" type="text"
                                           class="form-control">
                                </div>
                            </div>

                            <div v-if="imagem.st_url" class="col-6">
                                <div class="form-group">
                                    <label for="st_url">Link:</label>
                                    <input v-model="imagem.st_url" id="st_url" type="text"
                                           class="form-control disabled" disabled>
                                </div>
                            </div>

                            <div v-else class="col-6">
                                <div class="custom-file">
                                    <input v-on:change="handleFileUpload()" type="file" ref="file"
                                           class="custom-file-input" id="st_url" required>
                                    <label class="custom-file-label" for="st_url">{{labelimputfile}}</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ImagemApi from "@/services/ImagemApi";

    export default {
        name: "FormImagens",
        components: {BarraTitulo},
        created() {
            if (this.$route.params.id_imagem) {
                ImagemApi.get(this.$route.params.id_imagem, result => {
                    this.imagem = result.data;
                })
            }
        },
        methods: {
            save: function () {
                let formData = new FormData();
                formData.append('st_file', this.file);
                formData.append('st_nome', this.imagem.st_nome);
                formData.append('st_alt', this.imagem.st_alt);
                formData.append('st_url', this.imagem.st_url);
                formData.append('id_imagem', this.imagem.id_imagem);

                this.loadingbutton = true;

                ImagemApi.upload(formData, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Imagem salva com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'viewimagens',
                        })

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);
                        this.loadingbutton = false;
                    }
                })

            },
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
                this.labelimputfile = this.$refs.file.files[0].name;

            }
        },
        data() {
            return {
                imagem: {
                    st_nome: "",
                    st_alt: "",
                    st_url: "",
                    id_imagem: ""
                },
                file: '',
                labelimputfile: "Escolher Arquivo...",
                loadingbutton: false
            }
        }
    }
</script>

<style scoped>

</style>
