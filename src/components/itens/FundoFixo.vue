<template>
    <div>

        <div v-if="imagem">
            <div class="banner-foto" :style="'background: url(' + imagem + ') center/cover' "></div>
        </div>

        <div v-else>
            <div class="banner-foto"></div>
        </div>

        <div class="sobre-banner"></div>
    </div>
</template>

<script>
    export default {
        name: "FundoFixo",
        props: [
            'imagem'
        ]
    }
</script>

<style scoped>

    .sobre-banner {
        width: 100%;
        height: 100vh;
        top: 0px;
        background: rgba(0, 0, 0, .8);
        position: fixed;
        z-index: -1;
    }

    .banner-foto {
        top: 0px;
        position: fixed;
        width: 100%;
        height: 100vh;
        background: url('../../assets/background-04.jpg') center/cover;
        z-index: -2;

    }

</style>