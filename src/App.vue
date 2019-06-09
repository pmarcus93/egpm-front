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


    .animate {
        display: block;
        position: relative;
        animation: animacao 1s;
    }

    @keyframes animacao {
        from {
            top: -100px;
            opacity: 0
        }
        to {
            top: 0;
            opacity: 1
        }
    }


    .animateslice {
        display: block;
        position: relative;
        animation: animateslice 0.2s;
    }

    @keyframes animateslice {
        from {
            right: -500px;
            opacity: 0
        }
        to {
            right: 0;
            opacity: 1
        }
    }

    .animatescale {
        display: block;
        position: relative;
        animation: animatescale 0.2s;
    }

    @keyframes animatescale {
        from {
            transform: scale(2);
            opacity: 0
        }
        to {
            transform: scale(1);
            opacity: 1
        }
    }

</style>
