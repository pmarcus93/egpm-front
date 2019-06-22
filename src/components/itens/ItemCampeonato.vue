<template>
    <div class="col-6 col-lg-4 bloco-campeonato" style="border: 1px solid red">
        <router-link :to="'/campeonatos/' + rota">
            <div class="row">
                <div class="col-12 info-campeonatos">
                    <h3 class="nome-campeonato text-center">{{titulo}}</h3>
                </div>
                <div class="wrapper">
                    <picture>
                        <source media="(min-width: 576px)" v-bind:srcset="imagens.sm.st_url">
                        <source media="(min-width: 768px)" v-bind:srcset="imagens.md.st_url">
                        <source media="(min-width: 992px)" v-bind:srcset="imagens.lg.st_url">
                        <img v-bind:srcset="imagens.default.st_url">
                    </picture>
                </div>
                <div class="sobre-imagem"></div>
                <div class="icones">
                    <div v-if="+iscampeonato === 1" class="d-flex align-items-center justify-content-center">
                        <span class="campeonato-txt">CAMPEONATO</span>
                        <img src="../../assets/icons/swords.svg"
                             alt="Ícone indicativo de campeonato. Duas espadas cruzadas." class="icone-campeonato">
                    </div>
                </div>
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

    picture {
        border: 5px solid green;
        display: block;
        img {
            width: 100%;
            height: auto;
        }
    }


    .bloco-campeonato {
        padding-bottom: 90px;
        padding-top: 90px;

        @include md {
            :active .sobre-imagem {
                background: rgba(0, 0, 0, .4);
            }

            :hover .sobre-imagem {
                background: rgba(0, 0, 0, .4);
            }
        }

    }

    .bloco-campeonato > * {
        text-decoration: none;
    }


    .campeonato-txt {
        color: $color-primary;
    }

    .wrapper {
        height: 200px;
        width: auto;
        margin: auto;
        overflow: hidden;
        position: absolute;
        top: 0;
        z-index: 1;
    }

    .info-campeonatos {
        z-index: 3;
    }

    .icone-campeonato {
        color: $color-primary;
        height: 30px;
        margin-left: 10px;
        width: 30px;
    }

    .icones {
        bottom: 0;
        padding: 15px;
        position: absolute;
        right: 0;
        z-index: 3;
    }

    .nome-campeonato {
        color: $color-primary;
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
        @include md {
            font-size: 2em;
        }
    }

    .sobre-imagem {
        background: rgba(0, 0, 0, .5);
        height: 100%;
        position: absolute;
        top: 0;
        transition: all linear .2s;
        width: 100%;
        z-index: 2;

        @include md {
            background: rgba(0, 0, 0, .8);
        }
    }

</style>
