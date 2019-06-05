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
                    <div class="d-flex align-items-center justify-content-center">
                        <span style="color: yellow;">CAMPEONATO</span>
                        <img src="../../assets/icons/swords.svg" class="icone-campeonato">
                    </div>

                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ItemCampeonato",
        props: ["titulo", "imagem", "texto", "rota"],
    }
</script>

<style scoped>

    .icone-campeonato {
        height: 40px;
        width: 40px;
        margin-left: 10px;
        color: yellow;

    }
    
    .icones {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 3;
        padding: 15px;
    }

    .bloco-campeonato {
        padding-bottom: 90px;
        padding-top: 90px;
    }

    .bloco-campeonato:active .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }

    .bloco-campeonato:hover .sobre-imagem {
        background: rgba(0, 0, 0, .4);
    }

    .nome-campeonato {
        color: yellow;
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

    .bloco-campeonato > * {
        text-decoration: none;
    }

</style>