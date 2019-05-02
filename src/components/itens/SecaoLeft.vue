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
        font-size: 4em;
        font-family: Archive;
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

        transform: translateZ(-1px) scale(1.9);
        background-size: 100%;
        z-index: -1;
    }

    .bgpalestra::after {
        background: url('../../assets/background-01.jpg') center/cover;

    }

</style>