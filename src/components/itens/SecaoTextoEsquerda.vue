<template>
    <div class="secao-left-body container-fluid">
        <div class="row">
            <section class="col-12 section d-flex" :class="[classimage, type]">
                <div class="col-md-6 my-auto box-info">
                    <h1 class="mb-2 titulo-secao-left"
                        v-bind:style="{ 'border-bottom':  colorborder + ' solid 3px' }">{{titulo}}</h1>
                    <p class="mt-2 descricao">{{descricao}}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoTextoEsquerda",
        props: ["imagem", "descricao", "titulo", "colorborder", "classimage", "type"],
    }
</script>

<style scoped lang="scss">

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .secao-left-body {
        color: whitesmoke;
    }

    .static::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .section {
        position: relative;
        height: 50vh;
        justify-content: flex-start;
    }

    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform: translateZ(-1px) scale(2);
        background-size: 100%;
        z-index: -1;
    }

    .bgpalestra::after {
        background: url('../../assets/background-01.jpg') center/cover;

    }

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {

        .box-info {
            text-align: center;
            z-index: 2;
        }

        .descricao {
            font-size: 1.2rem;
        }

        .titulo-secao-left {
            font-size: 2.5em;
            font-family: $font-archive;
            text-align: center;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {

        .box-info {
            z-index: 2;
            text-align: center;
        }

        .descricao {
            font-size: 1.5rem;
        }

        .titulo-secao-left {
            font-size: 3em;
            font-family: $font-archive;
            text-align: center;
        }

    }

</style>
