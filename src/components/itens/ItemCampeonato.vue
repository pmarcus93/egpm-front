<template>


    <div class="col-sm-12 col-xl-4 bloco-campeonato ">

        <div class="row">
            <div class="col-12 info-campeonatos">

                <h3 class="nome-campeonato text-center">{{titulo}}</h3>

                <p class="text-center texto-campeonato"></p>

            </div>

            <div class="fundo-imagem" v-bind:style="{ 'background': 'url(' + imagem + ') center/cover' }">

            </div>

            <div class="sobre-imagem">

            </div>

        </div>

    </div>

    </div>

</template>

<script>
    export default {
        name: "ItemCampeonato",
        props: ["titulo", "imagem", "texto"],
    }
</script>

<style scoped>

    .bloco-campeonato {
        padding-bottom: 90px;
        padding-top: 90px;
    }

    .bloco-campeonato:active .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }

    .bloco-campeonato:hover .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }


    .nome-campeonato {
        font-size: 2em;
        font-weight: bold;
        color: yellow;
    }

    .texto-campeonato {
        color: white;
    }

    .sobre-imagem {
        background: rgba(0, 0, 0, .8);
        position: absolute;
        z-index: 2;
        top: 0px;
        height: 100%;
        width: 100%;
        transition: all linear .2s;
    }

    .fundo-imagem {

        position: absolute;
        z-index: 1;
        top: 0px;
        height: 100%;
        width: 100%;
    }

    .info-campeonatos {
        z-index: 3;
    }


</style>