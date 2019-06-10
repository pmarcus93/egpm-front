<template>
    <div>
        <div v-if="!action">
            <div class="container-menu">
                <router-link :to="'/painel/'+route">
                    <div class=" col-10 mx-auto pl-5 item-menu py-2 my-4">
                    <span class="icon p-2">
                        <i :class="'fa fa-'+icone"></i>
                    </span>
                        <span class="text-nav"> {{titulo}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else>
            <div class="container-menu">
                <div v-on:click="actionpainel(action)" class="col-10 mx-auto pl-5 item-menu py-2 my-4">
                    <span class="icon p-2">
                        <i :class="'fa fa-'+icone"></i>
                    </span>
                    <span class="text-nav"> {{titulo}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemMenuPainel",
        props: [
            'titulo',
            'icone',
            'route',
            'action'
        ],
        methods: {
            actionpainel: function (acao) {
                this.$parent.actionpainel(acao);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .icon {
        border-radius: 25px;
        background: $color-primary-painel;
    }

    .container-menu > * {
        text-decoration: none !important;
        color: #fff;
    }

    .item-menu {
        cursor: pointer;
        border-radius: 25px;
        font-size: 1em;
        transition: all linear .2s;

    }

    .item-menu:hover {
        background: $color-primary-painel-variant !important;
        border-radius: 25px;
    }


</style>