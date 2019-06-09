<template>
    <div id="app">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        <Navbar></Navbar>
        <div class="site-contents">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/itens/Navbar";
    export default {
        name: 'app',
        components: {Navbar},
    }

</script>

<style lang="scss">

    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    @font-face {
        font-family: $font-archive;
        src: url("/assets/fonts/Archive-Regular.ttf");
    }

    h1 {
        font-family: $font-archive;
    }

    .site-contents {
        margin-top: 62px
    }

</style>
