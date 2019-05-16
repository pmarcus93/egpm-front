<template>
    <div id="app">

        <router-view />

    </div>
</template>

<script>

    export default {
        name: 'app',
    }

</script>

<style>

    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

    @font-face {
        font-family: "Archive";
        src: url("/assets/fonts/Archive-Regular.ttf");
    }

    /*Necessário para funcionamento do Parallax*/
    .wraper {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
    }

</style>
