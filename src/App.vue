<template>
    <div id="app">
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
        display: flex !important;
        position: relative;
        animation: animateslice 0.2s;
        z-index: -1;
    }

    @keyframes animateslice {
        from {
            top: -1000px;
            opacity: 0
        }
        to {
            top: 0;
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

    .ck-editor__editable_inline {
        min-height: 300px !important;
    }

    :host ::ng-deep .ck-editor__editable_inline {
        min-height: 300px !important;
    }

</style>
