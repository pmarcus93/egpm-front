<template>
    <div class="animate">
        <div class="row">
            <BarraTitulo
                    titulo="COMENTARIOS"
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
                                  :imagem="item.st_imagem"
                    >
                    </ItemTrComentario>

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
                this.comentarios = retorno.data;
            })
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