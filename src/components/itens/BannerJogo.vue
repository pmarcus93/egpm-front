<template>
    <div class="container">
        <div class="row py-5">


            <div class="col-md-6 col-st-12 my-auto info-game">
                <h1 class="titulo-secao text-center mb-4">{{titulo}}</h1>

                <p class="texto-info" v-if="descricao">
                    {{descricao}}
                </p>

                <div class="my-3">
                    <div class="texto-info" v-if="estilo"><b>Categoria: </b>{{estilo}}</div>
                    <div class="texto-info" v-if="estilo"><b>Classificação indicativa: </b>18 anos</div>
                </div>

            </div>

            <div class="col-md-6 col-st-12 align-middle text-center">
                <iframe width="100%" height="315" :src="video" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
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

<style scoped lang="scss">

    .titulo-secao {
        font-weight: 600;
    }

    .info-game {
        color: $light-text;
        margin-top: 30px !important; //TODO: verificar a possibilidade de remover !important.
        text-align: center;
    }

    .texto-info {
        font-size: 1.2em;
        font-weight: 300;
    }

</style>
