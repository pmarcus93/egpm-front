<template>
    <div class="secao-right-body container-fluid">
        <div class="row">
            <section class="col-12 section d-flex" :class="[classimage, type]">
                <div class="col-md-6 my-auto box-info">
                    <h2 class="mb-2 titulo-secao-right content-title"><span>{{titulo}}</span></h2>
                    <p class="mt-2 content-description">{{descricao}}</p>
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

    .box-info {
        text-align: center;
        z-index: 2;
    }

    .bgcampeonatos {
        background: $color-secondary-variant url('../../assets/images/background-04.jpg') center/cover;
    }

    .bgfreeplay {
        background: $color-secondary-variant url('../../assets/images/background-03.jpg') center/cover;
    }

    .secao-right-body {
        color: $light-text;
    }

    .section {
        position: relative;
        height: 45vh;
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

        font-family: $font-archive;
        text-align: center;
    }

</style>
