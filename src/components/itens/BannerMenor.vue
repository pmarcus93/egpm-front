<template>
    <div class="row">
        <div class="col-12 banner text-center">
            <h1 class="titulo-secao">{{titulo}}</h1>
            <p class="texto-secao">{{descricao}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerMenor",
        props: ['titulo', 'descricao']
    }
</script>

<style scoped lang="scss">
    .banner {
        padding: 70px 0;
    }

    .texto-secao {
        color: $color-primary;
        font-size: 1.5em;
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 3em;
        color: $color-primary;

        @include sm {
            font-size: 5em;
        }
    }


</style>
