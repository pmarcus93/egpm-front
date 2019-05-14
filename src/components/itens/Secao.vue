<template>
    <div class="col-sm-12 col-md-6  my-auto">
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

<style>

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .titulo-secao {
        font-family: Archive;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .titulo-secao {
            font-size: 2em;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .titulo-secao {
            font-size: 3em;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

    }

    /* Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }


</style>