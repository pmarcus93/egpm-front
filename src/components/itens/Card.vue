<template>

    <div class="container custom-card">
        <div class="row">
            <h1 class="header text-uppercase text-center col-12"> {{ titulo }} </h1>
            <div class="imagem col-12"><img class="img-fluid" v-bind:src="urlimagem"></div>
            <div class="descricao col-12"> {{descricao}} </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Card',
        props: ['titulo', 'urlimagem', 'descricao']
    }

</script>

<style>

    .custom-card {
        background: #212529;
        color: #FCD347;
    }

    .custom-card {
        margin: 25px 0;
    }

    .card div {
        padding: 0;
    }

    .custom-card .header {
        font-size: 30px;
        padding: 8px;
    }

    .custom-card .descricao {
        padding: 10px;
    }

    .custom-card img {
        width: 100%;
        height: 20vw;
        min-height: 250px;
        object-fit: cover;
    }

</style>