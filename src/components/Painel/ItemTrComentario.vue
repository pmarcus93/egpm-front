<template>
    <tr class="align-items-center text-center">
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">
            </div>
        </td>
        <td>{{autor}}</td>
        <td>{{comentario}}</td>
        <td>
            <router-link :to="'/painel/comentarios/editar/'+ id">
                <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </router-link>
        </td>
        <td>
            <button class="btn btn-danger" v-on:click="remover(id)"><i class="fa fa-trash"></i></button>
        </td>

    </tr>
</template>

<script>
    import ComentarioApi from "@/services/ComentarioApi";

    export default {
        name: "ItemTrComentario",
        props: [
            'autor',
            'comentario',
            'id',
            'imagem',
        ],
        methods: {

            remover: function (id) {
                ComentarioApi.deleteComentario(id, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Comentário removido com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        ComentarioApi.getAllComentarios(retorno => {
                            this.$parent.comentarios = retorno.data;
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
    .capa {
        height: 60px;
        width: 100px;
    }
</style>