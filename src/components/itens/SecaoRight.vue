<template>
    <div class="secao-right-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 py-15">

                    <div class="col-sm-6 my-auto secao-right float-right">
                        <section>
                            <h1 class="text-left mb-4 titulo-secao-right" v-bind:style="{ 'border-bottom':  colorborder + ' solid 3px' }">{{titulo}}</h1>
                            <p class="mt-3">{{descricao}}</p>
                        </section>
                    </div>

                    <div class="fundo-secao" v-bind:style="{ 'background': 'url(' + imagem + ') center/cover' }"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoRight",
        props: ["titulo", "imagem", "descricao", "colorborder"],
    }
</script>

<style scoped>
    .titulo-secao-right{
        font-size: 4em;
        font-family: Archive;
    }

    .secao-right-body {
        color: whitesmoke;
    }

    .fundo-secao {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;

    }

    .secao-right {
        z-index: 3;
    }

    .py-15 {
        padding-top: 15%;
        padding-bottom: 15%;
    }
</style>