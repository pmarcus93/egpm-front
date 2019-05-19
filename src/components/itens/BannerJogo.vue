<template>
    <div class="row py-5">

        <div class="col-md-6 col-st-12 align-middle text-center">
            <iframe width="100%" height="315" :src="video" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>

        <div class="col-md-6 col-st-12 my-auto info-game">
            <h2 class="titulo-secao">{{titulo}}</h2>
            <p class="texto-info" v-if="descricao">
                {{descricao}}
            </p>
            <p class="texto-info" v-if="lancamento">Lançamento: {{lancamento}}</p>
            <p class="texto-info" v-if="estilo">Estilo de jogo: {{estilo}}</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerJogo",
        props: [
            'titulo',
            'lancamento',
            'estilo',
            'video',
            'descricao'
        ]
    }
</script>

<style scoped>

    /* Small devices (landscape phones, 576px and up) */
    @media (max-width: 576px) {
        .info-game {
            color: #f5f5f5;
            margin-top: 30px !important;
            text-align: center;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 576px) {
        .info-game {
            color: #f5f5f5;
        }
    }

    .texto-info {
        font-size: 1.2em;
        font-weight: 300;
    }

</style>