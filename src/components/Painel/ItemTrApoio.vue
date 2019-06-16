<template>
    <tr>

        <td>{{nome}}</td>
        <td>{{empresa}}</td>
        <td>{{email}}</td>
        <td>{{telefone}}</td>
        <td v-if=" +analisado === 1">
            <button disabled class="btn disabled btn-light"><i class="fa fa-check"></i></button>
        </td>
        <td v-else>
            <button v-on:click="analisar(id)" class="btn btn-success"><i class="fa fa-check"></i></button>
        </td>
        <td>
            <button class="btn btn-danger" v-on:click="remover(id)"><i class="fa fa-trash"></i></button>
        </td>

    </tr>
</template>

<script>
    import ApoioApi from "@/services/ApoioApi";

    export default {
        name: "ItemTrApoio",
        props: [
            'nome',
            'empresa',
            'email',
            'telefone',
            'id',
            'analisado'
        ],
        methods: {
            remover: function (id) {
                ApoioApi.delete(id, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Apoio removido com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        ApoioApi.getAll(retorno => {
                            this.$parent.apoios = retorno.data;
                        })

                    } else {
                        opts.title = 'Erro';
                        opts.text = result.data.erro.message;
                        opts.type = 'error';
                        PNotify.alert(opts);

                    }
                })
            },
            analisar: function (id) {
                ApoioApi.analisar(id, result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Apoio marcado como analisado.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        ApoioApi.getAll(retorno => {
                            this.$parent.apoios = retorno.data;
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