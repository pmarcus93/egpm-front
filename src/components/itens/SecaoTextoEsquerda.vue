<template>
    <div class="secao-left-body">
        <div class="container-fluid">
            <div class="row">
                <section class="col-12 section d-flex" :class="[classimage, type]">
                    <div class="col-sm-6 my-auto box-info">
                        <h1 class="text-left mb-4 titulo-secao-left"
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
        name: "SecaoLeft",
        props: ["imagem", "descricao", "titulo", "colorborder", "classimage", "type"],
    }
</script>

<style scoped>

    .titulo-secao-left {
        font-family: Archive;
    }

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }
    .secao-left-body {
        color: whitesmoke;
    }

    .box-info {
        z-index: 2;
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

    .section {
        position: relative;
        height: 60vh;
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
    @media (min-width: 576px) {
        .titulo-secao-left {
            font-size: 2em;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        .titulo-secao-left {
            font-size: 4em;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {

    }

    /* Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {

    }

</style>