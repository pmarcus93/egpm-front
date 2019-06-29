<template>
    <section>
        <div class="bg-img-container">
            <!--TODO: Implementar imagens responsivas do back end. -->
            <img v-bind:src="imagens">
            <div class="text text-center">
                <div class="container">
                    <div class="col-12">
                        <h1 class="titulo-secao"><span>{{titulo}}</span></h1>
                        <h5 class="mt-3">{{descricao}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HeaderSubScreen",
        props: ['titulo', 'descricao', 'imagens']
    }
</script>

<style lang="scss" scoped>

    section {
        color: $color-primary;
    }

    .bg-img-container {
        height: 50vh;
        position: relative;
        width: 100%;
        background-color: black;

        img {
            filter: brightness(35%) grayscale(25%);
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }

    .text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .titulo-secao {
        font-family: $font-archive;
        color: $color-primary;

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