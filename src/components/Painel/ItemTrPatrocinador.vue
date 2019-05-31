<template>
    <tr>
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">
            </div>
        </td>
        <td>{{nome}}</td>
        <td>{{email}}</td>
        <td>
            <router-link :to="'/painel/patrocinadores/editar/'+ id">
                <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </router-link>
        </td>
        <td>
            <button class="btn btn-danger" v-on:click="remover(id)"><i class="fa fa-trash"></i></button>
        </td>

    </tr>
</template>

<script>
    import EgpmApi from "../../services/EgpmApi";
    import PatrocinadorApi from "../../services/PatrocinadorApi";

    export default {
        name: "ItemTrPatrocinador",
        props: [
            'id',
            'imagem',
            'email',
            'nome'
        ],
        methods: {
            remover: function (id) {
                PatrocinadorApi.deletePatrocinador(id, EgpmApi.pushAutenticationobject(null), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Patrocinador removido com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        EgpmApi.getAllPatrocinadore(retorno => {
                            this.$parent.patrocinadores = retorno.data;
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