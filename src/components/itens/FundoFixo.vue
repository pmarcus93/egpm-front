<template>
    <div>
        <div class="banner-foto"></div>
        <div class="sobre-banner"></div>
    </div>
</template>

<script>
    export default {
        name: "FundoFixo"
    }
</script>

<style scoped>

    .sobre-banner {
        width: 100%;
        height: 100vh;
        top: 0px;
        background: rgba(0, 0, 0, .5);
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