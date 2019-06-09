<template>
    <div class="container">
        <div class="row">
            <div class="col-12 banner text-center">
                <h1 class="titulo-secao"><span>{{titulo}}</span></h1>
                <p class="texto-secao mt-3">{{descricao}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerMenor",
        props: ['titulo', 'descricao']
    }
</script>

<style scoped lang="scss">

    .banner {
        padding: 50px 0;
    }

    .texto-secao {
        color: $color-primary;
        @include sm {
            font-size: 1.3rem;
        }
    }

    .titulo-secao {
        font-family: $font-archive;
        font-size: 2rem;
        color: $color-primary;

        @include sm {
            font-size: 3rem;
        }

        span {
            position: relative;
            padding-bottom: 1px;
        }

        span::after {
            bottom: 0;
            border-bottom: 1px solid $color-primary;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
        }
    }

</style>
