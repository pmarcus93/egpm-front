<template>
    <div class="row">
        <div class="banner col-12 my-auto text-center">
            <h1 class="titulo-secao">Dúvidas</h1>
            <p class="texto-secao">As dúvidas mais frequentes respondidas.</p>
        </div>

        <div class="banner-foto"></div>
        <div class="sobre-banner"></div>

    </div>
</template>

<script>
    export default {
        name: "BannerMenor"
    }
</script>

<style scoped>
    .banner {
        height: 40vh;
        z-index: 3;
    }

    .sobre-banner {
        width: 100%;
        height: 40vh;
        background: rgba(0,0,0,.5);
        position: absolute;
        z-index: 1;
    }

    .banner-foto {
        position: absolute;
        width: 100%;
        height: 40vh;
        background: url('../../assets/background-04.jpg') center/cover;
        z-index: 0;

    }

    .titulo-secao {
        font-family: Archive;
        font-size: 3em;
        color: yellow;
        margin-top: 80px;
    }

    .texto-secao {
        color: yellow;
    }

</style>