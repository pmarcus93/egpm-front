<template>
    <div class="secao-right-body">
        <div class="container-fluid">
            <div class="row">
                <section class="col-12 section d-flex" :class="[classimage, type]">
                    <div class="col-sm-6 my-auto box-info">
                        <h1 class=" text-left mb-4 titulo-secao-right"
                            v-bind:style="{ 'border-bottom':  colorborder + ' solid 3px' }">{{titulo}}</h1>
                        <p class="mt-3">{{descricao}}</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoRight",
        props: ["titulo", "imagem", "descricao", "colorborder", "classimage", "type"],
    }
</script>

<style scoped>

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .titulo-secao-right {
        font-family: Archive;
    }

    .secao-right-body {
        color: whitesmoke;
    }

    .section {
        position: relative;
        height: 60vh;
        justify-content: flex-end;
    }

    .box-info {
        z-index: 2;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        .titulo-secao-right {
            font-size: 2em;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .titulo-secao-right {
            font-size: 4em;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

    }

    /* Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }


    .static::after{
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