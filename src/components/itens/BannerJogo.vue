<template>
    <div class="row py-5">

        <div class="col-md-6 col-st-12 align-middle text-center">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/7zwQPJmg-Kg?start=3" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>

        <div class="col-md-6 col-st-12 my-auto info-game text-left">
            <h2 class="titulo-secao">{{titulo}}</h2>
            <p>
                Mortal Kombat 11 é umvideojogo de luta desenvolvido pela NetherRealm Studios e publicado pela Warner
                Bros. Interactive Entertainment . Correndo no Unreal Engine 3,
                é a décima primeira edição principal da série Mortal Kombat e uma sequência do Mortal Kombat X de 2015.
            </p>
            <p>Lançamento: 20/04/2019</p>
            <p>Estilo de jogo: Ação e Luta.</p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerJogo",
        props: [
            'titulo'
        ]
    }
</script>

<style scoped>

    .info-game {
        color: whitesmoke;
    }

</style>