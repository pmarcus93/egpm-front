<template>
    <div>
        <div v-if="imagem">
            <div class="banner-foto" :style="'background: url(' + imagem + ') center/cover' "></div>
        </div>

        <div v-else>
            <div class="banner-foto"></div>
        </div>

        <div v-if="sobreimagem">
            <div class="sobre-banner" :style="'background:' + sobreimagem"></div>
        </div>
        <div v-else>
            <div class="sobre-banner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FundoFixo",
        props: [
            'imagem',
            'sobreimagem'
        ]
    }
</script>

<style scoped>

    .sobre-banner {
        width: 100%;
        height: 100%;
        top: 0;
        background: rgba(0, 0, 0, .8);
        position: fixed;
        z-index: -1;
    }

    .banner-foto {
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background: url('../../assets/background-04.jpg') center/cover;
        z-index: -2;
    }

</style>