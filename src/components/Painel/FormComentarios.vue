<template>
    <div class="row">
        <BarraTitulo
                titulo="COMENTÁRIOS"
                icon="check"
                texto-botao="Salvar"
                action="save"
        >
        </BarraTitulo>

        <div class="col-12 pt-3">
            <form>
                <div class="row">
                    <div class="col-6">
                        <h4>Dados do  Comentário:</h4>

                        <div class="form-group">
                            <label for="st_autor">Nome do autor:</label>
                            <input id="st_autor" v-model="comentario.st_autor" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="st_comentario">Comentário:</label>
                            <textarea id="st_comentario" v-model="comentario.st_comentario" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="st_imagem">Foto:</label>
                            <input id="st_imagem" v-model="comentario.st_imagem" class="form-control">
                        </div>

                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>

    import ComentarioApi from "@/services/ComentarioApi";
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
                comentario: {
                    id_comentario: null,
                    st_imagem: null,
                    st_autor: null,
                    st_comentario: null
                }
            }
        },
        methods: {
            save: function () {
                ComentarioApi.postComentario(ComentarioApi.pushAutenticationobject(this.comentario), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Comentário salvo com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        this.$router.push({
                            name: 'viewcomentarios',
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
