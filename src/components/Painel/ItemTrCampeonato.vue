<template>
    <tr class="align-items-center text-center">
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">

            </div>
        </td>
        <td>{{nome}}</td>
        <td>{{descricao}}</td>
        <td> <router-link :to="'/campeonatos/'+id"><button class="btn btn-primary"> <i class="fa fa-link"></i> </button></router-link></td>
        <td> <router-link :to="'/painel/campeonatos/editar/'+ id"><button class="btn btn-primary"> <i class="fa fa-edit"></i> </button></router-link>  </td>
        <td><button class="btn btn-danger" v-on:click="remover(id)" > <i class="fa fa-trash"></i> </button> </td>


    </tr>
</template>

<script>
    import EgpmApi from "../../services/EgpmApi";

    export default {
        name: "ItemTrCampeonato",
        props: [
            'nome',
            'descricao',
            'link',
            'id',
            'imagem',
        ],
        methods: {
            remover : function (id) {
                EgpmApi.deleteCampeonato(id, EgpmApi.pushAutenticationobject(null), result => {
                    if (result.data.status) {
                        alert("Sucesso!" + result.data.message);
                    } else {
                        alert("Erro!" + result.data.erro.message);
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