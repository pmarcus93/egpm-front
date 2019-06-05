<template>
    <div class="secao-right-body container-fluid">
        <div class="row">
            <section class="col-12 section d-flex" :class="[classimage, type]">
                <div class="col-md-6 my-auto box-info">
                    <h1 class="mb-2 titulo-secao-right"
                        v-bind:style="{ 'border-bottom':  colorborder + ' solid 3px' }">{{titulo}}</h1>
                    <p class="mt-2 descricao">{{descricao}}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoTextoDireita",
        props: ["titulo", "imagem", "descricao", "colorborder", "classimage", "type", "rota"],
    }
</script>

<style scoped>

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .secao-right-body {
        color: whitesmoke;
    }

    .section {
        position: relative;
        height: 50vh;
        justify-content: flex-end;
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

        .titulo-secao-right {
            font-size: 2.5em;
            font-family: Archive;
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

        .titulo-secao-right {
            font-size: 3em;
            font-family: Archive;
            text-align: center;
        }
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

    .bgcampeonatos::after {
        background: url('../../assets/background-04.jpg') center/cover;
    }

    .bgfreeplay::after {
        background: url('../../assets/background-03.jpg') center/cover;
    }

</style>