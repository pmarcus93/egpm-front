<template>
    <div class="col-6 col-md-4 bloco-campeonato">
        <router-link :to="'/campeonatos/' + rota">
            <div class="wrapper">
                <h1 class="titulo-jogo">{{titulo}}</h1>

                <picture>
                    <source media="(min-width: 576px)" v-bind:srcset="imagens.sm.st_url">
                    <img loading="lazy" v-bind:srcset="imagens.default.st_url">
                </picture>

                <div class="sobre-imagem"></div>
            </div>
        </router-link>
    </div>
</template>

<script>

    export default {
        name: "ItemCampeonato",
        props: ["titulo", "imagens", "texto", "rota", "iscampeonato"],
    }
</script>


<style scoped lang="scss">


    .bloco-campeonato {
        text-decoration: none;
        padding-left: 0;
        padding-right: 0;
        @include md {
            :active .sobre-imagem {
                background: rgba(0, 0, 0, .4);
            }

            :hover .sobre-imagem {
                background: rgba(0, 0, 0, .4);
            }
        }
    }

    .sobre-imagem {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        position: absolute;
        top: 0;
        transition: all linear .2s;
        width: 100%;
        z-index: 1;

        @include md {
            background: rgba(0, 0, 0, .8);
        }
    }

    .titulo-jogo {
        color: $color-primary;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        font-weight: bold;
        text-transform: uppercase;
        @include sm {
            font-size: 1.5rem;
        }
        @include lg {
            font-size: 1.7rem;
        }

        z-index: 3;
    }

    .wrapper {
        position: relative;
        text-align: center;
        height: 150px;

        @include sm {
            height: 300px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>
