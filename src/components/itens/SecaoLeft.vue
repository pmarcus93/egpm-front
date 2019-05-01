<template>

        <div class="secao-left-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 py-15">

                        <div class="col-sm-6 my-auto secao-left">
                            <section>
                                <h1 class="text-left mb-4 titulo-secao-left">{{titulo}}</h1>
                                <p class="mt-3">{{descricao}}</p>
                            </section>
                        </div>

                        <div class="fundo-secao"
                             v-bind:style="{ 'background': 'url(' + imagem + ') center/cover' }"></div>

                    </div>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        name: "SecaoLeft",
        props: ["imagem", "descricao", "titulo"],
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

    .fundo-secao {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;

    }

    .secao-left {
        z-index: 3;
    }

    .py-15 {
        padding-top: 15%;
        padding-bottom: 15%;
    }
</style>