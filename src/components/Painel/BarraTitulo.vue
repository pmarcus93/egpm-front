<template>
    <div class="col-12 p-0">
        <div class="titulo p-3">
            <h2><span>{{titulo}}</span>
                <span class="float-right mr-5">
                            <router-link :to="rota">
                                <button class="btn btn-painel-primary">
                                    <i v-if="icon" :class="'fa fa-'+icon"></i>
                                    <i v-else class="'fa fa-'+icon"></i>
                                    <span v-if="textoBotao"> {{textoBotao}}</span>
                                    <span v-else> Adicionar</span>
                                </button>
                            </router-link>
                        </span>
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BarraTitulo",
        props: [
            'titulo',
            'icon',
            'rota',
            'textoBotao'
        ]
    }
</script>

<style lang="scss" scoped>
    h2 {
        font-family: Roboto;
        font-weight: bold;
        color: $color-primary-painel;
    }

    .titulo {
        background: whitesmoke;
        border-bottom: solid $color-primary-painel-variant;
    }

    .btn-painel-primary {
        background: $color-primary-painel;
        color: #fff;
    }

    .btn-painel-primary:hover {
        background: $color-primary-painel;
        color: #eee;
    }
</style>