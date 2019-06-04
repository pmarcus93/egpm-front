<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="IMAGEM"
                    icon="check"
                    texto-botao="Salvar"
                    action="save"
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
                                <div class="custom-file">
                                    <input v-on:change="handleFileUpload()" type="file" ref="file" class="custom-file-input" id="st_arquivo" required>
                                    <label class="custom-file-label" for="st_arquivo">Escolher arquivo...</label>
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
    import EgpmApi from "@/services/EgpmApi";

    export default {
        name: "FormImagens",
        components: {BarraTitulo},
        created() {

        },
        methods: {
            save: function () {
                let formData = new FormData();
                formData.append('st_arquivo', this.file);
                formData.append('st_nome', this.imagem.st_nome);

                EgpmApi.uploadImagem(formData, retorno => {

                })

            },
            handleFileUpload() {
                this.file = this.$refs.file.files[0];
            }
        },
        data() {
            return {
                imagem: {
                    st_nome: "",
                },
                file: ''
            }
        }
    }
</script>

<style scoped>

</style>