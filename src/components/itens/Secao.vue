<template>
    <div class="my-auto">
        <section>
            <h1 class="text-left mb-4 titulo-secao">{{titulo}}</h1>
            <p class="mt-3 text-justify">{{descricao}}</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Secao',
        props: [
            'titulo', 'descricao'
        ]
    }
</script>

<style scoped lang="scss">

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 2.5em;
        text-align: center !important;

        @include sm {
            font-size: 3em;
        }
    }

</style>
