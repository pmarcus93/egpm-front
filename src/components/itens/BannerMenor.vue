<template>
    <div class="row">
        <div class=" col-12  text-center">
            <div class="col-12 banner">
                <h1 class="titulo-secao">{{titulo}}</h1>
                <p class="texto-secao">{{descricao}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerMenor",
        props: ['titulo', 'descricao']
    }
</script>

<style scoped>
    .banner {
        padding: 70px 0;
    }

    .titulo-secao {
        font-family: Archive;
        font-size: 5em;
        color: yellow;

    }

    .texto-secao {
        color: yellow;
    }

</style>