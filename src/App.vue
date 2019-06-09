<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }

</script>

<style lang="scss">

    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    @font-face {
        font-family: $font-archive;
        src: url("/assets/fonts/Archive-Regular.ttf");
    }

    h1, h2, h3, h4, h5 {
        font-family: $font-archive;
    }

</style>
