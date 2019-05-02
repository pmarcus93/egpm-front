<template>
    <div class="secao-right-body">
        <div class="container-fluid">
            <div class="row">
                <section class="col-12 section parallax d-flex" :class="classimage">
                    <div class="col-sm-6 my-auto ">
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
        props: ["titulo", "imagem", "descricao", "colorborder", "classimage", "parallax"],
    }
</script>

<style scoped>

    .titulo-secao-right {
        font-size: 4em;
        font-family: Archive;
    }

    .secao-right-body {
        color: whitesmoke;
    }

    .section {
        position: relative;
        height: 100vh;
        justify-content: flex-end;
    }

    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform: translateZ(-2px) scale(2.1);
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