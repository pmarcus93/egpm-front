<template>
    <div class="secao-right-body container-fluid">
        <div class="row">
            <section class="col-12 section d-flex" :class="[classimage, type]">
                <div class="col-md-6 my-auto box-info">
                    <h1 class="mb-2 titulo-secao-right"><span>{{titulo}}</span></h1>
                    <h2 class="mt-2 descricao">{{descricao}}</h2>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoTextoDireita",
        props: ["titulo", "imagem", "descricao", "colorborder", "classimage", "type", "rota"],
    }
</script>

<style scoped lang="scss">

    @font-face {
        font-family: "Archive";
        src: url("../../assets/fonts/Archive-Regular.ttf");
    }

    .box-info {
        text-align: center;
        z-index: 2;
    }

    .bgcampeonatos {
        background: url('../../assets/background-04.jpg') center/cover;
        ::after {
            //Antigo código de parallax.
        }
    }

    .bgfreeplay {
        background: url('../../assets/background-03.jpg') center/cover;
        ::after {
            //Antigo código de parallax.
        }
    }

    .descricao {
        font-size: 1.2rem;
        @include sm {
            font-size: 1.3rem;
        }

        @include md {
            font-size: 1.5rem;
        }

    }
/*
    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transform: translateZ(-1px) scale(2);
        background-size: 100%;
        z-index: -1;
    }
*/
    .secao-right-body {
        color: whitesmoke;
    }

    .section {
        position: relative;
        height: 50vh;
        justify-content: flex-end;
    }

    .static::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .titulo-secao-right {

        span {
            position: relative;
            padding-bottom: 1px;
        }

        span::after {
            bottom: 0;
            border-bottom: 1px solid $rainbow-red;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
        }

        font-size: 2rem;
        font-family: $font-archive;
        text-align: center;

        @include md {
            font-size: 3em;
        }
    }

</style>
