<template>
    <div class="col-12 py-5 item-duvida" v-bind:style="{ 'background':  background  }">
        <div class="col-12 text-center my-4"><i class="fa fa-comments fa-3x"></i></div>
        <div class="col-12 duvida ">{{duvida}}</div>
        <div class="col-12 resposta  my-4">{{resposta}}</div>
    </div>
</template>

<script>
    export default {
        name: "ItemDuvida",
        props: ["duvida", "resposta", "background"],
    }
</script>

<style scoped>
    .duvida {
        font-size: 1.5em;
        font-weight: bold;
    }

    .item-duvida {
        background: #50f5b0;
        cursor: pointer;
        transition: all linear .2s;
    }

    .item-duvida:hover {
        transform: scale(1.05);
        position: relative;
        z-index: 1;
    }
</style>