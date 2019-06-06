<template>
    <div class="col-12 p-0">
        <div class="titulo p-3">
            <h2><span>{{titulo}}</span>
                <span v-if="textoBotao" class="float-right mr-5">
                    <span v-if="rota">
                            <router-link :to="rota">
                                <button class="btn btn-painel-primary">
                                    <i v-if="icon" :class="'fa fa-'+icon"></i>
                                    <i v-else class="'fa fa-'+icon"></i>
                                    <span> {{textoBotao}}</span>
                                </button>

                            </router-link>
                        </span>
                        <span v-else>
                                <button v-if="action" v-on:click="save()" class="btn btn-painel-primary">

                                    <span v-if="loadingbutton" class="spinner-border spinner-border-sm text-light"
                                          role="status">
                                        <span class="sr-only">Loading...</span>
                                    </span>

                                    <span v-else>
                                        <i v-if="icon" :class="'fa fa-'+icon"></i>
                                        <i v-else class="'fa fa-'+icon"></i>
                                    </span>

                                    <span> {{textoBotao}}</span>
                                </button>

                                <button v-else class="btn btn-painel-primary">
                                    <i v-if="icon" :class="'fa fa-'+icon"></i>
                                    <i v-else class="'fa fa-'+icon"></i>
                                    <span> {{textoBotao}}</span>
                                </button>
                        </span>
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
            'textoBotao',
            'action',
            'loadingbutton'
        ],
        methods: {
            save: function () {
                this.$parent.save();
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2 {
        font-family: Roboto, Arial, "Helvetica Neue", Helvetica, sans-serif;
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