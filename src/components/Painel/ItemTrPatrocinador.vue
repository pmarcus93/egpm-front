<template>
    <tr>
        <td>
            <div class="capa" :style="'background: url(' + imagem + ') center/cover' ">
            </div>
        </td>
        <td>{{nome}}</td>
        <td>{{email}}</td>
        <td> <router-link :to="'/painel/patrocinadores/editar/'+ id"><button class="btn btn-primary"> <i class="fa fa-edit"></i> </button></router-link>  </td>
        <td><button class="btn btn-danger" v-on:click="remover(id)" > <i class="fa fa-trash"></i> </button> </td>

    </tr>
</template>

<script>
    export default {
        name: "ItemTrPatrocinador",
        props: [
            'id',
            'imagem',
            'email',
            'nome'
        ]
    }
</script>

<style scoped>
    .capa {
        height: 60px;
        width: 100px;
    }
</style>