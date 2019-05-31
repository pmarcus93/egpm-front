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

<style scoped>

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 2.5em;
            text-align: center !important;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {
        .titulo-secao {
            font-family: Archive;
            font-size: 3em;
        }
    }

</style>