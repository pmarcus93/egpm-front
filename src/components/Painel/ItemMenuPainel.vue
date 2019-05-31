<template>
    <div class=" col-10 mx-auto pl-5 item-menu py-2 my-4">
        <router-link :to="'/painel/'+route">
            <span class="icon p-2"><i :class="'fa fa-'+icone"></i> </span> <span
                class="text-nav"> {{titulo}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ItemMenuPainel",
        props: [
            'titulo',
            'icone',
            'route'
        ]
    }
</script>

<style lang="scss" scoped>

    .icon {
        border-radius: 25px;
        background: $color-primary-painel;
    }

    .item-menu > * {
        text-decoration: none;
        color: #fff;
    }

    .item-menu {
        cursor: pointer;
        border-radius: 25px;
        font-size: 1.5em;
        transition: all linear .2s;
        color: #19c2ff !important;
    }

    .item-menu:hover {
        background: $color-primary-painel-variant !important;
        border-radius: 25px;
        color: white !important;
    }

</style>