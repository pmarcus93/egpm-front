<template>
    <div>
        <div class="row">
            <BarraTitulo
                    titulo="COMENTÁRIOS"
                    icon="plus"
                    texto-botao="Adicionar"
                    rota="/painel/comentarios/adicionar"
            >
            </BarraTitulo>

            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Comentário</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                    </thead>

                    <tbody>

                    <ItemTrComentario v-for="(item) in comentarios"
                                      :comentario="item.st_comentario"
                                      :autor="item.st_autor"
                                      :id="item.id_comentario"
                                      :imagem="item.imagens[0].st_arquivo"
                    ></ItemTrComentario>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import BarraTitulo from "./BarraTitulo";
    import ComentarioApi from "@/services/ComentarioApi";
    import ItemTrComentario from "./ItemTrComentario";

    export default {
        name: "ViewComentario",
        components: {ItemTrComentario, BarraTitulo},
        created() {
            ComentarioApi.getAllComentarios(retorno => {

                for (let i = 0; i < retorno.data.length; i++) {
                    if (retorno.data[i].imagens[0] === undefined) {
                        retorno.data[i].imagens = [{st_arquivo: ""}];
                    }
                }

                this.comentarios = retorno.data;
                this.limitaTamanhoDescricao();
            })
        },

        methods: {
            limitaTamanhoDescricao: function () {
                for (let i = 0; i < this.comentarios.length; i++) {
                    if (this.comentarios[i].st_comentario && this.comentarios[i].st_comentario.length > 100) {
                        this.comentarios[i].st_comentario = this.comentarios[i].st_comentario.substring(0, 100) + "...";
                    }
                }
            }
        },

        data: function () {
            return {
                comentarios: [],
                comentario: {
                    id_comentario: null,
                    st_imagem: null,
                    st_autor: null,
                    st_comentario: null
                }
            }
        }
    }
</script>

<style scoped>

</style>
