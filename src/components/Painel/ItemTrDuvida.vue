<template>
    <tr>
        <td>{{duvida}}</td>
        <td>{{resposta}}</td>
        <td>{{ordem}}</td>
        <td>
            <router-link :to="'/painel/duvidas/editar/'+ id">
                <button class="btn btn-primary"><i class="fa fa-edit"></i></button>
            </router-link>
        </td>
        <td>
            <button class="btn btn-danger" v-on:click="remover(id)"><i class="fa fa-trash"></i></button>
        </td>
    </tr>
</template>

<script>
    import EgpmApi from "@/services/EgpmApi";

    export default {
        name: "ItemTrDuvida",
        props: [
            'id',
            'duvida',
            'ordem',
            'resposta'
        ],
        methods: {
            remover: function (id) {
                EgpmApi.deleteDuvida(id, EgpmApi.pushAutenticationobject(null), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Dúvida removida com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        EgpmApi.getAllDuvidas(retorno => {
                            this.$parent.duvidas = retorno.data;
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