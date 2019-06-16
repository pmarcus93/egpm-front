<template>
    <tr>
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">
            </div>
        </td>
        <td>{{nome}}</td>
        <td><input :id="id" class="form-control disabled" disabled type="text" :value="imagem"></td>
        <td>
            <button v-on:click="copia(id)" class="btn btn-primary"><i class="fa fa-copy"></i></button>
        </td>
        <td>
            <router-link :to="'/painel/imagens/editar/'+id" >
                <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </router-link>
        </td>
        <td>
            <button class="btn btn-danger" v-on:click="remover(id)"><i class="fa fa-trash"></i></button>
        </td>

    </tr>
</template>

<script>
    import ImagemApi from "@/services/ImagemApi";

    export default {
        name: "ItemTrImagem",
        props: [
            'id',
            'imagem',
            'nome'
        ],
        methods: {
            copia: function (id) {
                $("#" + id).attr("disabled", false);
                $("#" + id).select();
                var copiar = document.execCommand('copy');
                var opts = {};
                if (copiar) {
                    opts.title = 'Sucesso';
                    opts.text = "Link copiado com sucesso!";
                    opts.type = 'success';
                    PNotify.alert(opts);

                } else {
                    opts.title = 'Erro';
                    opts.text = "Ocorreu um erro ao copiar o link!";
                    opts.type = 'error';
                    PNotify.alert(opts);
                }
                $("#" + id).attr("disabled", true);

            },
            remover: function (id) {
                ImagemApi.delete(id, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Imagem removida com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        ImagemApi.getAll(retorno => {
                            this.$parent.imagens = retorno.data;
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