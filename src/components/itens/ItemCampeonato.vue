<template>
    <div class="col-sm-12 col-xl-4 bloco-campeonato">
        <router-link :to="'/campeonatos/' + rota">
            <div class="row">
                <div class="col-12 info-campeonatos">
                    <h3 class="nome-campeonato text-center">{{titulo}}</h3>
                </div>
                <div class="fundo-imagem" v-bind:style="{ 'background': 'url(' + imagem + ') center/cover' }">
                </div>
                <div class="sobre-imagem"></div>
                <div class="icones">
                    <div v-if="+iscampeonato === 1" class="d-flex align-items-center justify-content-center">
                        <span class="campeonato-txt">CAMPEONATO</span>
                        <img src="../../assets/icons/swords.svg" alt="Ícone indicativo de campeonato. Duas espadas cruzadas." class="icone-campeonato">
                    </div>

                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ItemCampeonato",
        props: ["titulo", "imagem", "texto", "rota", "iscampeonato"],
    }
</script>


<style scoped lang="scss">

    .bloco-campeonato {
        padding: 90px 0;
    }

    .bloco-campeonato > * {
        text-decoration: none;
    }

    .bloco-campeonato:active .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }

    .bloco-campeonato:hover .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }

    .campeonato-txt {
        color: $color-primary;
    }

    .fundo-imagem {
        height: 100%;
        position: absolute;
        top: 0;
        width: 100%;
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
        font-size: 2em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .sobre-imagem {
        background: rgba(0, 0, 0, .8);
        height: 100%;
        position: absolute;
        top: 0;
        transition: all linear .2s;
        width: 100%;
        z-index: 2;
    }

</style>
