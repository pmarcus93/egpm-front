<template>
    <div id="app">
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
            top: 0px;
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

    .fixed {
        position: fixed;
        width: 100%;
        z-index: 5;
        top: 0;
    }

    .conteudo {
        margin-top: 62px;
    }

    .container-fluid {
        overflow: hidden;
    }

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }

    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }

    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }

</style>
