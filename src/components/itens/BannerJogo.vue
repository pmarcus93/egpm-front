<template>
    <div>
        <div class="row py-5 position-relative">
            <div class="col-12 banner-foto" :style="'background: url(' + imagem + ') center/cover' "></div>
            <div class="col-12 sobre-banner"></div>
            <div class="col-12 no-gutters">
                <div class="row no-gutters">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-st-12 my-auto info-game">
                                <h1 class="titulo-secao mb-4">{{titulo}}</h1>

                                <p class="texto-info text-justify" v-if="descricao">
                                    {{descricao}}
                                </p>

                                <div class="my-3 text-left">
                                    <div class="texto-info" v-if="estilo"><b>Categoria: </b>{{estilo}}</div>
                                    <div class="texto-info" v-if="quantidadejogadores"><b>Jogadores: </b>{{quantidadejogadores}}</div>
                                    <div class="texto-info" v-if="plataforma"><b>Plataformas: </b>{{plataforma}}</div>
                                    <div class="texto-info" v-if="classificacaoindicativa"><b>Classificação
                                        indicativa: </b>{{classificacaoindicativa}}
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 col-st-12 align-middle text-center">
                                <iframe v-if="video" width="100%" height="315" :src="video" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
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
            'descricao',
            'imagem',
            'plataforma',
            'classificacaoindicativa'
        ]
    }
</script>

<style scoped lang="scss">

    h1, h2, h3, h4, h5 {
        font-family: $font-archive;
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

    .titulo-secao {
        font-weight: 600;
    }

    .sobre-banner {
        width: 100%;
        height: 100%;
        top: 0;
        background: rgba(0, 0, 0, .8);
        position: absolute;
        z-index: -1;
    }

    .banner-foto {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -2;
    }

</style>
