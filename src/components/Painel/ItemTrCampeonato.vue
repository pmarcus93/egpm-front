<template>
    <tr class="align-items-center text-center">
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">
            </div>
        </td>
        <td>{{nome}}</td>
        <td>{{descricao}}</td>
        <td>
            <button v-if="+iscampeonato === 1" class="btn btn-light disabled"><i class="fa fa-check"></i></button>
        </td>
        <td>
            <router-link :to="'/jogos/'+id">
                <button class="btn btn-primary"><i class="fa fa-link"></i></button>
            </router-link>
        </td>
        <td>
            <router-link :to="'/painel/jogos/editar/'+ id">
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
        name: "ItemTrCampeonato",
        props: [
            'nome',
            'descricao',
            'link',
            'id',
            'imagem',
            'iscampeonato'
        ],
        methods: {

            remover: function (id) {
                EgpmApi.deleteCampeonato(id, EgpmApi.pushAutenticationobject(null), result => {
                    var opts = {};
                    if (result.data.status) {
                        opts.title = 'Sucesso';
                        opts.text = "Campeonato removido com sucesso.";
                        opts.type = 'success';
                        PNotify.alert(opts);
                        EgpmApi.getAllCampeonatos(retorno => {
                            this.$parent.campeonatos = retorno.data;
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